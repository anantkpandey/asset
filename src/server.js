// File: /src/server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow React frontend to connect
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
connectDB();

// Basic route for health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'LMS API is running', timestamp: new Date().toISOString() });
});

// TODO: Mount API routes (e.g., user, course routes)
// app.use('/api/users', require('./api/routes/user'));
// app.use('/api/courses', require('./api/routes/course'));

app.listen(port, () => {
  console.log(`LMS server running on port ${port}`);
});