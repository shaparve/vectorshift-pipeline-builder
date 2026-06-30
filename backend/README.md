# VectorShift Backend

This backend is a FastAPI service used by the VectorShift frontend to validate pipeline graphs.

## Quick Start

1. Open a terminal in `backend/`
2. Run:
   ```powershell
   uvicorn main:app --host 127.0.0.1 --port 8001
   ```
3. Confirm the service is available at:
   - `http://127.0.0.1:8001/`

## API Endpoints

- `GET /` - health check returning `{ "Ping": "Pong" }`
- `POST /pipelines/parse` - validate pipeline JSON

### Parse request body

```json
{
  "nodes": [
    {
      "id": "input-1",
      "type": "customInput",
      "position": { "x": 0, "y": 0 },
      "data": { "inputName": "x" }
    }
  ],
  "edges": []
}
```

### Response example

```json
{
  "num_nodes": 1,
  "num_edges": 0,
  "is_dag": true
}
```

## Notes

- The backend currently validates the graph structure and whether it is a directed acyclic graph (DAG).
- If you change the backend port, update `frontend/.env` with the new `REACT_APP_API_URL`.

For full project setup and run instructions, see the top-level `../README.md`.
