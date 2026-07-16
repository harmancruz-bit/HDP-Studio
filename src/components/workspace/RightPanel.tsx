import React from 'react'
import InspectorTabs from './InspectorTabs'
import Glyph from './Glyph'
import '../../styles/RightPanel.css'
type Tab = 'properties' | 'styles' | 'animations' | 'actions' | 'backend' | 'responsive' | 'seo'
export default function RightPanel({ selectedComponent, activeTab, onTabChange }: { selectedComponent: string | null; activeTab: Tab; onTabChange: (tab: Tab) => void }) {
  return <aside className="right-panel"><div className="inspector-heading"><div><span className="eyebrow">INSPECT</span><h2>Inspector</h2></div><button className="tool-icon">⋯</button></div><InspectorTabs activeTab={activeTab} onTabChange={onTabChange} /><div className="inspector-content"><div className="inspector-empty"><div className="inspector-illustration"><Glyph name="layers" /></div><h3>{selectedComponent ? selectedComponent : 'Nothing selected'}</h3><p>{selectedComponent ? 'Select a property below to begin editing.' : 'Select an element on the canvas to inspect and customize it.'}</p><div className="empty-lines"><i /><i /><i /></div></div></div><div className="inspector-footer"><button><Glyph name="code" /> View code</button><button>?</button></div></aside>
}
