# VectorShift Frontend

This is the VectorShift frontend application.

For full project setup and run instructions, see the top-level `../README.md`.

## Scripts

- `npm start` - start development server
- `npm run build` - build production bundle
- `npm test` - run tests

## Configuration

The frontend reads the backend URL from `REACT_APP_API_URL` in `frontend/.env`.
Example:

```text
REACT_APP_API_URL=http://127.0.0.1:8001
```

## Notes

This project uses Create React App and React Flow for the drag-and-drop pipeline builder.
