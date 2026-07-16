import React from 'react'
import '../../styles/InspectorTabs.css'
type Tab = 'properties' | 'styles' | 'animations' | 'actions' | 'backend' | 'responsive' | 'seo'
const tabs: { id: Tab; label: string }[] = [{ id: 'properties', label: 'Properties' }, { id: 'styles', label: 'Styles' }, { id: 'animations', label: 'Motion' }, { id: 'actions', label: 'Actions' }, { id: 'backend', label: 'Backend' }, { id: 'responsive', label: 'Responsive' }, { id: 'seo', label: 'SEO' }]
export default function InspectorTabs({ activeTab, onTabChange }: { activeTab: Tab; onTabChange: (tab: Tab) => void }) { return <nav className="inspector-tabs">{tabs.map(tab => <button key={tab.id} className={activeTab === tab.id ? 'active' : ''} onClick={() => onTabChange(tab.id)}>{tab.label}</button>)}</nav> }
