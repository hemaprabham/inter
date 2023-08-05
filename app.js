// app.js
const express = require('express');
const app = express();

// Set up middleware for JSON parsing
app.use(express.json());

// Import and use the authRoutes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// ... Rest of your app configuration ...

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
