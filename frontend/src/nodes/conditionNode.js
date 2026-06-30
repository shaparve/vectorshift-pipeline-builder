import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const ConditionNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [condition, setCondition] = useState(data?.condition || 'x > 0');

  const handleChange = (e) => {
    const value = e.target.value;
    setCondition(value);
    updateNodeField(id, 'condition', value);
  };

  return (
    <BaseNode
      id={id}
      title="Condition"
      description="Branch based on truthiness"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-true`, label: 'True' }, { id: `${id}-false`, label: 'False', top: '60%' }]}
      content={
        <label className="field-group">
          Expression:
          <input value={condition} onChange={handleChange} className="node-input" />
        </label>
      }
    />
  );
};
