import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => {
    const value = e.target.value;
    setCurrName(value);
    updateNodeField(id, 'inputName', value);
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setInputType(value);
    updateNodeField(id, 'inputType', value);
  };

  return (
    <BaseNode
      id={id}
      title="Input"
      description="Define a source variable"
      outputs={[{ id: `${id}-value` }]}
      content={
        <>
          <label className="field-group">
            Name:
            <input className="node-input" type="text" value={currName} onChange={handleNameChange} />
          </label>
          <label className="field-group">
            Type:
            <select className="node-select" value={inputType} onChange={handleTypeChange}>
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        </>
      }
    />
  );
};
