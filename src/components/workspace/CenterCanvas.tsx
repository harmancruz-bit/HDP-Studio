import React from 'react'
import '../../styles/CenterCanvas.css'

const CenterCanvas: React.FC = () => {
  return (
    <div className="center-canvas">
      <div className="canvas-grid-background" />
      <div className="canvas-content">
        <div className="canvas-empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4">
            <path d="M12 2v20M2 12h20M6 6l12 12M18 6l-12 12" />
          </svg>
          <h2>Drag components here</h2>
          <p>Build your app by dragging components from the library</p>
          <div className="canvas-actions">
            <button className="btn-secondary">Start from scratch</button>
            <span>or</span>
            <button className="btn-primary">Select a template</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CenterCanvas
