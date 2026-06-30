import { useMemo, useState } from 'react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

const extractVariables = (text) => {
  const matches = Array.from(text.matchAll(/\{\{\s*([A-Za-z_]\w*)\s*\}\}/g));
  return Array.from(new Set(matches.map((match) => match[1])));
};

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const variables = useMemo(() => extractVariables(currText), [currText]);
  const width = Math.min(340, Math.max(220, Math.max(...currText.split('\n').map((line) => line.length * 8 + 48), 220)));
  const rows = Math.min(8, Math.max(3, currText.split('\n').length));

  const handleTextChange = (e) => {
    const value = e.target.value;
    setCurrText(value);
    updateNodeField(id, 'text', value);
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      description="Text with dynamic variables"
      inputs={variables.map((variable, i) => ({ id: `${id}-${variable}`, top: `${20 + i * 16}%` }))}
      outputs={[{ id: `${id}-output` }]}
      className="text-node"
      content={
        <>
          <label className="field-group">
            Text:
            <textarea
              className="text-input"
              style={{ width, minHeight: rows * 26, maxHeight: 240 }}
              value={currText}
              onChange={handleTextChange}
            />
          </label>
          {variables.length > 0 && (
            <div className="variable-list">Variables: {variables.join(', ')}</div>
          )}
        </>
      }
    />
  );
};
