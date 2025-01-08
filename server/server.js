// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors());         // Enable CORS for cross-origin requests

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    }
};
connectDB();

// Basic Route
app.get('/', (req, res) => {
    res.send('Server is running...');
});

// Set Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
