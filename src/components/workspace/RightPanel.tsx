import React from 'react'
import InspectorTabs from './InspectorTabs'
import Glyph from './Glyph'
import { useWorkspaceContext, workspaceValue } from '../../context/WorkspaceContext'
import '../../styles/RightPanel.css'
import '../../styles/InspectorEditor.css'
type Tab = 'properties' | 'styles' | 'animations' | 'actions' | 'backend' | 'responsive' | 'seo'
export default function RightPanel({ activeTab, onTabChange }: { activeTab: Tab; onTabChange: (tab: Tab) => void }) {
  const { currentBlock, currentModule, currentProduct, currentScreen } = useWorkspaceContext()
  const groups = ['General', 'Brand', 'Images', 'Typography', 'Colors', 'Buttons', 'Spacing', 'Effects']
  return <aside className="right-panel"><div className="inspector-heading"><div><span className="eyebrow">INSPECT</span><h2>Inspector</h2></div><button className="tool-icon">⋯</button></div><InspectorTabs activeTab={activeTab} onTabChange={onTabChange} /><div className="inspector-content"><div className="inspector-editor"><div className="inspector-context"><span>Current Product <b>{workspaceValue(currentProduct)}</b></span><span>Current Module <b>{workspaceValue(currentModule)}</b></span><span>Current Screen <b>{workspaceValue(currentScreen)}</b></span>{currentBlock && <span>Current Block <b>{currentBlock}</b></span>}</div><div className="inspector-groups">{groups.map((group, index) => <details key={group} open={index === 0}><summary>{group}<span>⌄</span></summary><div className="inspector-placeholder"><i /><i /><i /></div></details>)}</div></div></div><div className="inspector-footer"><button><Glyph name="code" /> View code</button><button>?</button></div></aside>
}
