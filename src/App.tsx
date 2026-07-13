import React from 'react'
import TopNavBar from './components/TopNavBar'
import LeftSidebar from './components/LeftSidebar'
import RightInspector from './components/RightInspector'
import BottomPanel from './components/BottomPanel'
import WorkspaceCanvas from './components/WorkspaceCanvas'

export default function App() {
  return (
    <div className="app-root">
      <TopNavBar />
      <div className="app-body">
        <LeftSidebar />
        <main className="workspace-area">
          <WorkspaceCanvas />
        </main>
        <RightInspector />
      </div>
      <BottomPanel />
    </div>
  )
}
