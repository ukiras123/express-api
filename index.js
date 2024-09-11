// index.js
const express = require('express');
const app = express();
const port = 3000;

// Health check endpoint
app.get('/', (req, res) => {
    const healthStatus = {
        status: 'UP',
        uptime: process.uptime(), // Uptime of the server in seconds
        timestamp: new Date(),    // Current server time
        message: 'API is healthy',
    };
    res.status(200).json(healthStatus);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
