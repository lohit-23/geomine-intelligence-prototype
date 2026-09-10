# Geomine Intelligence

Geomine Intelligence is a web application prototype for analyzing and managing geological and mining data. It consists of a vanilla web frontend and a Node.js/Express backend.

## Project Structure

- `/frontend` - Contains the HTML, CSS, and vanilla JavaScript files for the user interface.
- `/backend` - Contains the Node.js Express server providing the API and WebSocket connections.
- `netlify.toml` - Netlify deployment configuration for serving the frontend.

## Prerequisites

- Node.js installed on your machine.

## How to Run Locally

### Option A: Single Server (Recommended)

Navigate to the `backend` directory and start the server. It automatically serves both the backend API and the frontend dashboard on port 3000:
```bash
cd backend
npm install
npm start
```
Open your browser and navigate to:
**`http://localhost:3000`**

---

### Option B: Separate Frontend & Backend Servers

1. **Start Backend**:
   ```bash
   cd backend
   npm start
   ```
   Runs on `http://localhost:3000`.

2. **Start Frontend**:
   ```bash
   cd frontend
   npx http-server -p 8080
   ```
   Runs on `http://localhost:8080`.

---

## Deploying to Netlify

- **Netlify Drop**: Drag and drop the `frontend/` folder directly to [https://geomine-intelligence.netlify.app/](https://geomine-intelligence.netlify.app/).
- **Git Deployment**: Push to GitHub and link to Netlify. The included `netlify.toml` automatically configures the publish directory to `frontend`.

## Features

- **Document Analysis & Search**: Provides mocked exploration reports, production statements, and coal quality assays.
- **AI Chat Mockup**: Simulates interactions with an AI assistant to query production trends and geological details.
- **Real-time Telemetry**: Uses Socket.io to push mocked real-time alerts and production updates to the frontend.
