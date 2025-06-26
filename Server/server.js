const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db'); // we'll create this next

const authRoutes = require('./routes/authRoutes');
// Later: const userRoutes = require('./routes/userRoutes');
// Later: const sessionRoutes = require('./routes/sessionRoutes');

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);

// Additional routes can be added as we build more
// app.use('/api/users', userRoutes);
// app.use('/api/sessions', sessionRoutes);

app.listen(8080, () => {
  console.log('Server is started on port 8080');
});
