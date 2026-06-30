import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const TransformNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [transformType, setTransformType] = useState(data?.transformType || 'Uppercase');

  const handleChange = (e) => {
    const value = e.target.value;
    setTransformType(value);
    updateNodeField(id, 'transformType', value);
  };

  return (
    <BaseNode
      id={id}
      title="Transform"
      description="Modify text or values"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
      content={
        <label className="field-group">
          Mode:
          <select value={transformType} onChange={handleChange} className="node-select">
            <option>Uppercase</option>
            <option>Lowercase</option>
            <option>Trim</option>
            <option>Reverse</option>
          </select>
        </label>
      }
    />
  );
};
