const Database = require('better-sqlite3');
const bcrypt = require('bcrypt');
const path = require('path');

const db = new Database(path.resolve(__dirname, 'database.sqlite'));

// 🔁 Drop old users table to prevent schema conflicts (DEV ONLY — remove for production!)
db.exec(`DROP TABLE IF EXISTS users;`);

// ✅ Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT NOT NULL,
    birthDate TEXT NOT NULL,
    gender TEXT NOT NULL,
    address TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    course TEXT,
    role TEXT NOT NULL CHECK(role IN ('tutee', 'tutor', 'admin')),
    yearLevel TEXT,
    password TEXT NOT NULL,
    bio TEXT,
    is_active INTEGER DEFAULT 1
  );

  CREATE TABLE IF NOT EXISTS tutor_profiles (
    user_id INTEGER PRIMARY KEY,
    bio TEXT,
    subjects TEXT,
    availability TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tutor_id INTEGER,
    student_id INTEGER,
    date TEXT,
    status TEXT CHECK(status IN ('pending', 'accepted', 'completed', 'cancelled')),
    notes TEXT,
    FOREIGN KEY(tutor_id) REFERENCES users(id),
    FOREIGN KEY(student_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS announcements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
`);

// ✅ Create default super admin
function createSuperAdmin() {
  const email = 'admin@wildteach.local';
  const password = 'admin123'; // ✅ You forgot to define this
  const role = 'admin';

  const existingAdmin = db.prepare('SELECT * FROM users WHERE email = ?').get(email);

  if (!existingAdmin) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    db.prepare(`
      INSERT INTO users (
        fullName, birthDate, gender,
        address, email, course,
        role, yearLevel, password, bio
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      'Super Admin', '', '', '', email, '', role, '', hashedPassword, ''
    );

    console.log('Super admin account created: email = admin@wildteach.local / password = admin123');
  } else {
    console.log('Super admin already exists');
  }
}



// Run once at startup
createSuperAdmin();

module.exports = db;
