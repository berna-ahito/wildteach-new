const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

const JWT_SECRET = 'super_secret_key'; // TODO: move to .env in production

// --- REGISTER ---
router.post('/register', async (req, res) => {
  const {
    lastName, firstName, middleName,
    birthMonth, birthDay, birthYear,
    gender, town, barangay, houseNumber,
    email, course, role, yearLevel,
    password, bio
  } = req.body;

  const fullName = `${lastName}, ${firstName}${middleName ? ' ' + middleName : ''}`;
  const birthDate = `${birthMonth}/${birthDay}/${birthYear}`;
  const address = `${houseNumber}, ${barangay}, ${town}`;

  try {
    const existingUser = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already in use.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    db.prepare(`
      INSERT INTO users (
        fullName, birthDate, gender,
        address, email, course,
        role, yearLevel, password, bio
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      fullName, birthDate, gender,
      address, email, course,
      role, yearLevel, hashedPassword, bio
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// --- LOGIN ---
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials (user not found)' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: 'Invalid credentials (wrong password)' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ token });
  } catch (err) {
    console.error('Login error:', err.message, err.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
