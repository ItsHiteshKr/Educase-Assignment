# Educase Assignment

This repository contains a simple Node.js application created for the Educase assignment.

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

To install the dependencies, run:

```bash
npm i
```

## Usage

To start the application, run:

```bash
npm start
```

The server will start on `http://localhost:3000` by default.

## Available Endpoints

- `GET /` - Welcome message with basic information
- `GET /health` - Health check endpoint
- `GET /info` - Application information including version and system details

## Configuration

The application supports the following environment variables:

- `PORT` - Server port (default: 3000)
- `HOST` - Server host (default: localhost)
- `NODE_ENV` - Environment mode (default: development)

## Example Usage

```bash
# Start the server
npm start

# Test the endpoints
curl http://localhost:3000/
curl http://localhost:3000/health
curl http://localhost:3000/info
```

## Stopping the Server

To stop the server, press `Ctrl+C` in the terminal where it's running.
