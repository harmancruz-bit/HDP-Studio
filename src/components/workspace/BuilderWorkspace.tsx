import React, { useState } from 'react'
import TopBar from './TopBar'
import LeftPanel from './LeftPanel'
import CenterCanvas from './CenterCanvas'
import RightPanel from './RightPanel'
import BottomBar from './BottomBar'
import '../../styles/BuilderWorkspace.css'

interface BuilderWorkspaceProps {
  projectName: string
}

export const BuilderWorkspace: React.FC<BuilderWorkspaceProps> = ({ projectName }) => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)
  const [inspectorTab, setInspectorTab] = useState<'properties' | 'styles' | 'animations' | 'actions' | 'backend' | 'responsive' | 'seo'>('properties')

  return (
    <div className="builder-workspace">
      <TopBar projectName={projectName} />
      <div className="workspace-body">
        <LeftPanel onComponentSelect={setSelectedComponent} />
        <CenterCanvas />
        <RightPanel selectedComponent={selectedComponent} activeTab={inspectorTab} onTabChange={setInspectorTab} />
      </div>
      <BottomBar />
    </div>
  )
}

export default BuilderWorkspace
