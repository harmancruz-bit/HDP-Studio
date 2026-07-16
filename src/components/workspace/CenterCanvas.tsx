import React from 'react'
import CanvasToolbar from './CanvasToolbar'
import CanvasOnboarding from './CanvasOnboarding'
import '../../styles/CenterCanvas.css'

export default function CenterCanvas() {
  return <main className="center-canvas"><div className="canvas-grid-background" /><CanvasToolbar /><div className="canvas-viewport"><div className="ruler ruler-top"><span>0</span><span>320</span><span>640</span><span>960</span><span>1280</span></div><div className="ruler ruler-side"><span>0</span><span>240</span><span>480</span><span>720</span></div><div className="page-label"><i /> Desktop · 1440 × 900</div><div className="canvas-frame"><div className="safe-area safe-top" /><div className="safe-area safe-bottom" /><div className="center-guide vertical" /><div className="center-guide horizontal" /><div className="frame-corner top-left" /><div className="frame-corner top-right" /><div className="frame-corner bottom-left" /><div className="frame-corner bottom-right" /><CanvasOnboarding /></div></div><div className="canvas-status"><span className="workspace-ready"><i /> Workspace ready</span><span>100% zoom</span><span>1440 × 900</span><span>Cursor&nbsp; 720, 450</span></div></main>
}
