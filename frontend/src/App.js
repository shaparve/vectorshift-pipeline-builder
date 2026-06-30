import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-title">
          <div>
            <h1>VectorShift Pipeline Builder</h1>
            <p>Drag nodes from the toolbar, connect them, and submit to validate the pipeline.</p>
          </div>
          <span className="status-chip">Backend ready</span>
        </div>
      </header>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
