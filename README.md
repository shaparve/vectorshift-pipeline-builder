# VectorShift

A drag-and-drop pipeline builder with a React frontend and FastAPI backend.

## Project Structure

- `frontend/` - React app using Create React App and React Flow
- `backend/` - FastAPI app for validating pipeline graphs

## Prerequisites

- Node.js 18+ and npm
- Python 3.11+ with `fastapi`, `uvicorn`, and `pydantic`

## Setup

1. Open a terminal in `d:\OneDrive - vitbhopal.ac.in\Desktop\vs code\VectorShift\vectorshift`
2. Install frontend dependencies:
   ```powershell
   cd .\frontend
   npm install
   ```
3. If you need to configure the frontend API endpoint, create or update `.env` in `frontend/`:
   ```text
   REACT_APP_API_URL=http://127.0.0.1:8001
   ```

## Run the Backend

1. Open a terminal in `backend/`
2. Start the FastAPI server:
   ```powershell
   cd ..\backend
   uvicorn main:app --host 127.0.0.1 --port 8001
   ```
3. Confirm the backend is available at:
   - `http://127.0.0.1:8001/`

## Run the Frontend

1. Open a terminal in `frontend/`
2. Start the React app:
   ```powershell
   cd ..\frontend
   npm start
   ```
3. If port `3000` is already in use, accept the prompt to run on another port (for example, `3001`).
4. Open the app in your browser at the printed local URL.

## Build the Frontend

From `frontend/`:
```powershell
npm run build
```

The production build is generated in `frontend/build/`.

## Validate the App

- Use the UI to drag nodes from the toolbar onto the canvas.
- Connect them with edges.
- Click `Submit Pipeline` to call the backend parse endpoint.
- The backend validates whether the graph is a directed acyclic graph (DAG).

## Notes

- The backend currently validates only node/edge structure and DAG state.
- The frontend uses `REACT_APP_API_URL` to locate the backend server.
- If you change backend port, update `frontend/.env` accordingly.
