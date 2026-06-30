import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, title, description, content, inputs = [], outputs = [], className = '' }) => {
  return (
    <div className={`node-shell ${className}`}>
      <div className="node-header">{title}</div>
      <div className="node-description">{description}</div>
      <div className="node-body">{content}</div>

      {inputs.map((handle, index) => (
        <Handle
          key={handle.id}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={{ top: handle.top || `${20 + index * 20}%`, ...handle.style }}
        />
      ))}

      {outputs.map((handle, index) => (
        <Handle
          key={handle.id}
          type="source"
          position={Position.Right}
          id={handle.id}
          style={{ top: handle.top || `${20 + index * 20}%`, ...handle.style }}
        />
      ))}
    </div>
  );
};
