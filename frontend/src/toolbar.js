import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div className="pipeline-toolbar">
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="condition" label="Condition" />
      <DraggableNode type="transform" label="Transform" />
      <DraggableNode type="preview" label="Preview" />
      <DraggableNode type="timer" label="Timer" />
      <DraggableNode type="logger" label="Logger" />
    </div>
  );
};
