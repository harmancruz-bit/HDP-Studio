import React, { useState } from 'react'
import TopBar from './TopBar'
import LeftPanel from './LeftPanel'
import CenterCanvas from './CenterCanvas'
import RightPanel from './RightPanel'
import BottomBar from './BottomBar'
import { WorkspaceProvider } from '../../context/WorkspaceContext'
import '../../styles/BuilderWorkspace.css'
import '../../styles/WorkspaceContext.css'

interface BuilderWorkspaceProps {
  projectName: string
}

export const BuilderWorkspace: React.FC<BuilderWorkspaceProps> = ({ projectName }) => {
  const [inspectorTab, setInspectorTab] = useState<'properties' | 'styles' | 'animations' | 'actions' | 'backend' | 'responsive' | 'seo'>('properties')

  return (
    <WorkspaceProvider>
      <div className="builder-workspace">
        <TopBar projectName={projectName} />
        <div className="workspace-body">
          <LeftPanel />
          <CenterCanvas />
          <RightPanel activeTab={inspectorTab} onTabChange={setInspectorTab} />
        </div>
        <BottomBar />
      </div>
    </WorkspaceProvider>
  )
}

export default BuilderWorkspace
