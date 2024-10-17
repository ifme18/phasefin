const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

const app = express();
const apiServer = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Updated path for db.json
const middlewares = jsonServer.defaults();

// Serve static files (index.html, index.css, index.js) from the public folder
app.use(express.static(__dirname));  // Since everything is in public, __dirname refers to public/

// Use JSON Server to serve db.json as an API
apiServer.use(middlewares);
apiServer.use(router);

// Mount the API under /api route
app.use('/api', apiServer);

// Fallback to serve index.html for any non-API routes (useful for client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
