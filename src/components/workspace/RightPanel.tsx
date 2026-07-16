import React from 'react'
import InspectorTabs from './InspectorTabs'
import Glyph from './Glyph'
import { useWorkspaceContext, workspaceValue } from '../../context/WorkspaceContext'
import '../../styles/RightPanel.css'
type Tab = 'properties' | 'styles' | 'animations' | 'actions' | 'backend' | 'responsive' | 'seo'
export default function RightPanel({ activeTab, onTabChange }: { activeTab: Tab; onTabChange: (tab: Tab) => void }) {
  const { currentBlock, currentModule, currentProduct, currentScreen } = useWorkspaceContext()
  return <aside className="right-panel"><div className="inspector-heading"><div><span className="eyebrow">INSPECT</span><h2>Inspector</h2></div><button className="tool-icon">⋯</button></div><InspectorTabs activeTab={activeTab} onTabChange={onTabChange} /><div className="inspector-content"><div className="inspector-empty"><div className="inspector-illustration"><Glyph name="layers" /></div><h3>Workspace Context</h3><div className="inspector-context"><span>Current Product <b>{workspaceValue(currentProduct)}</b></span><span>Current Module <b>{workspaceValue(currentModule)}</b></span><span>Current Screen <b>{workspaceValue(currentScreen)}</b></span><span>Current Block <b>{workspaceValue(currentBlock)}</b></span></div><p>Waiting for block selection</p></div></div><div className="inspector-footer"><button><Glyph name="code" /> View code</button><button>?</button></div></aside>
}
