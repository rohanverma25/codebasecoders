const express = require('express');
const app = express();
const db = require('./config/db.config');

// const userRoutes = require('./routes/user.routes');

app.use(express.json());

// Routes
// app.use('/api/users', userRoutes);

// Basic health check
app.get('/', (req, res) => {
  res.send('API is working ✅');
});

module.exports = app;