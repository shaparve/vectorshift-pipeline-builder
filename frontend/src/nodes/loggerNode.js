import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const LoggerNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [level, setLevel] = useState(data?.level || 'Info');

  const handleChange = (e) => {
    const value = e.target.value;
    setLevel(value);
    updateNodeField(id, 'level', value);
  };

  return (
    <BaseNode
      id={id}
      title="Logger"
      description="Emit node messages"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-logged` }]}
      content={
        <label className="field-group">
          Level:
          <select className="node-select" value={level} onChange={handleChange}>
            <option>Info</option>
            <option>Warning</option>
            <option>Error</option>
          </select>
        </label>
      }
    />
  );
};
