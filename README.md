# Geomine Intelligence

Geomine Intelligence is a web application prototype for analyzing and managing geological and mining data. It consists of a vanilla web frontend and a Node.js/Express backend.

## Project Structure

- `/frontend` - Contains the HTML, CSS, and vanilla JavaScript files for the user interface.
- `/backend` - Contains the Node.js Express server that provides the API and WebSocket connections.

## Prerequisites

- Node.js installed on your machine.

## How to Run Locally

### 1. Start the Backend API

Open a terminal and navigate to the `backend` directory:
```bash
cd backend
npm install
npm start
```
The backend server will run on `http://localhost:3000`.

### 2. Start the Frontend

Open another terminal and navigate to the `frontend` directory. You can use any local HTTP server to serve the static files, for example using `npx http-server`:
```bash
cd frontend
npx http-server -p 8080
```
Open your browser and navigate to `http://localhost:8080`.

## Features

- **Document Analysis & Search**: Provides mocked exploration reports, production statements, and coal quality assays.
- **AI Chat Mockup**: Simulates interactions with an AI assistant to query production trends and geological details.
- **Real-time Telemetry**: Uses Socket.io to push mocked real-time alerts and production updates to the frontend.
