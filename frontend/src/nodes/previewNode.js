import { BaseNode } from './BaseNode';

export const PreviewNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Preview"
      description="Inspect node output"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-preview` }]}
      content={<div className="preview-box">Preview data will appear here.</div>}
    />
  );
};
