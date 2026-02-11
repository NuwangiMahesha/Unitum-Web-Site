const express = require('express');
const cors = require('cors');
const path = require('path');

// Import the Netlify function
const { handler } = require('./netlify/functions/send-email');

const app = express();
const PORT = 8888;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from build directory
app.use(express.static(path.join(__dirname, 'build')));

// Mock Netlify function endpoint
app.post('/.netlify/functions/send-email', async (req, res) => {
  try {
    // Create a mock Netlify event object
    const event = {
      httpMethod: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'content-type': 'application/json',
        'x-forwarded-for': req.ip
      }
    };

    // Call the function handler
    const result = await handler(event, {});
    
    // Send the response
    res.status(result.statusCode);
    
    // Set headers if they exist
    if (result.headers) {
      Object.keys(result.headers).forEach(key => {
        res.set(key, result.headers[key]);
      });
    }
    
    // Parse and send the body
    const body = JSON.parse(result.body);
    res.json(body);
    
  } catch (error) {
    console.error('Local server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Handle React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Local development server running on http://localhost:${PORT}`);
  console.log('Email function available at: http://localhost:8888/.netlify/functions/send-email');
});

module.exports = app;