import React from 'react'
import TemplatesGallery from './components/templates/TemplatesGallery'
import TopNavBar from './components/TopNavBar'
import LeftSidebar from './components/LeftSidebar'
import RightInspector from './components/RightInspector'
import BottomPanel from './components/BottomPanel'
import WorkspaceCanvas from './components/WorkspaceCanvas'

export default function App() {
  return (
    <div className="app-root">
      <TemplatesGallery />
    </div>
  )
}
