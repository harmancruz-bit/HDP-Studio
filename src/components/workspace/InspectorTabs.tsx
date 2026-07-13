import React from 'react'
import '../../styles/InspectorTabs.css'

interface InspectorTabsProps {
  activeTab: 'properties' | 'styles' | 'animations' | 'actions' | 'backend' | 'responsive' | 'seo'
  onTabChange: (tab: 'properties' | 'styles' | 'animations' | 'actions' | 'backend' | 'responsive' | 'seo') => void
}

const tabs = [
  { id: 'properties', label: 'Properties' },
  { id: 'styles', label: 'Styles' },
  { id: 'animations', label: 'Animations' },
  { id: 'actions', label: 'Actions' },
  { id: 'backend', label: 'Backend' },
  { id: 'responsive', label: 'Responsive' },
  { id: 'seo', label: 'SEO' },
]

const InspectorTabs: React.FC<InspectorTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="inspector-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id as any)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default InspectorTabs
