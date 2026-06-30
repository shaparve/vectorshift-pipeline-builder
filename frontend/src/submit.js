import { useCallback } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
  const { nodes, edges } = useStore(
    (state) => ({ nodes: state.nodes, edges: state.edges }),
    shallow,
  );

  const handleSubmit = useCallback(async () => {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

    try {
      const response = await fetch(`${apiUrl}/pipelines/parse`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      alert(
        `Pipeline summary:\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nDirected Acyclic Graph: ${data.is_dag ? 'Yes' : 'No'}`,
      );
    } catch (error) {
      alert(`Unable to submit pipeline: ${error.message}`);
    }
  }, [nodes, edges]);

  return (
    <div className="submit-button">
      <button type="button" onClick={handleSubmit}>
        Submit Pipeline
      </button>
    </div>
  );
};
