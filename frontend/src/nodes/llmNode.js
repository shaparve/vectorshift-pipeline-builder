import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      description="Large language model node"
      inputs={[{ id: `${id}-system`, top: '30%' }, { id: `${id}-prompt`, top: '55%' }]}
      outputs={[{ id: `${id}-response` }]}
      content={<div>Provides a response based on input variables.</div>}
    />
  );
};
