#!/usr/bin/env node

/**
 * Educase Assignment - Simple Node.js Application
 * This is a basic Node.js application that demonstrates a working setup
 * that can be installed with `npm i` and started with `npm start`.
 */

const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// Simple HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Basic routing
  if (path === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'Welcome to Educase Assignment!',
      status: 'success',
      timestamp: new Date().toISOString(),
      endpoints: {
        '/': 'This welcome message',
        '/health': 'Health check endpoint',
        '/info': 'Application information'
      }
    }, null, 2));
  } else if (path === '/health' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'healthy',
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    }, null, 2));
  } else if (path === '/info' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      name: 'Educase Assignment',
      version: '1.0.0',
      description: 'A simple Node.js application for Educase assignment',
      node_version: process.version,
      platform: process.platform,
      memory_usage: process.memoryUsage()
    }, null, 2));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      error: 'Not Found',
      message: 'The requested endpoint does not exist',
      available_endpoints: ['/', '/health', '/info']
    }, null, 2));
  }
});

// Error handling
server.on('error', (err) => {
  console.error('Server error:', err);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nReceived SIGINT. Gracefully shutting down...');
  server.close(() => {
    console.log('Server closed. Goodbye!');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('\nReceived SIGTERM. Gracefully shutting down...');
  server.close(() => {
    console.log('Server closed. Goodbye!');
    process.exit(0);
  });
});

// Start the server
server.listen(PORT, HOST, () => {
  console.log(`🚀 Educase Assignment server is running!`);
  console.log(`📍 Server: http://${HOST}:${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🕒 Started at: ${new Date().toISOString()}`);
  console.log(`\n📋 Available endpoints:`);
  console.log(`   GET / - Welcome message`);
  console.log(`   GET /health - Health check`);
  console.log(`   GET /info - Application info`);
  console.log(`\n👉 Press Ctrl+C to stop the server`);
});