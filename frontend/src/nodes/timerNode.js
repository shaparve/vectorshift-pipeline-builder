import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const TimerNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [delay, setDelay] = useState(data?.delay || '1000');

  const handleChange = (e) => {
    const value = e.target.value;
    setDelay(value);
    updateNodeField(id, 'delay', value);
  };

  return (
    <BaseNode
      id={id}
      title="Timer"
      description="Delay execution by ms"
      inputs={[{ id: `${id}-start` }]}
      outputs={[{ id: `${id}-done` }]}
      content={
        <label className="field-group">
          Delay (ms):
          <input value={delay} onChange={handleChange} className="node-input" />
        </label>
      }
    />
  );
};
