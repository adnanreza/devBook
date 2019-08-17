// Server entry point

// Bring in and initialize Express
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to Database
connectDB();

// Make dummy GET request
app.get('/', (req, res) => res.send('API running'));

// Listen on port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
