import React from 'react'
import Glyph from './Glyph'
import '../../styles/TopBar.css'

export default function TopBar({ projectName }: { projectName: string }) {
  return <header className="top-bar">
    <div className="brand-cluster">
      <div className="brand-mark"><span>H</span><i /></div><strong>HDP <em>Studio</em></strong>
      <div className="top-divider" />
      <button className="project-switcher"><span className="project-dot" />{projectName}<Glyph name="chevron" /></button>
      <span className="saved-indicator"><i /> All changes saved</span>
    </div>
    <div className="top-actions">
      <div className="history-actions"><button className="tool-icon"><Glyph name="undo" /></button><button className="tool-icon"><Glyph name="redo" /></button></div>
      <label className="command-search"><Glyph name="search" /><input placeholder="Search anything..." /><kbd>⌘ K</kbd></label>
      <button className="top-button"><Glyph name="play" /> Preview</button>
      <button className="top-button run-button"><span className="run-dot" /> Run</button>
      <button className="top-button">Publish</button>
      <button className="deploy-button"><Glyph name="cloud" /> Deploy <Glyph name="chevron" /></button>
      <button className="tool-icon notification"><Glyph name="bell" /><b /></button>
      <div className="top-divider" />
      <button className="avatar" title="Account">HC</button>
    </div>
  </header>
}
