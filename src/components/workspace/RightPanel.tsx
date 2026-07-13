import React from 'react'
import InspectorTabs from './InspectorTabs'
import '../../styles/RightPanel.css'

interface RightPanelProps {
  selectedComponent: string | null
  activeTab: 'properties' | 'styles' | 'animations' | 'actions' | 'backend' | 'responsive' | 'seo'
  onTabChange: (tab: 'properties' | 'styles' | 'animations' | 'actions' | 'backend' | 'responsive' | 'seo') => void
}

const RightPanel: React.FC<RightPanelProps> = ({ selectedComponent, activeTab, onTabChange }) => {
  return (
    <div className="right-panel">
      <div className="panel-header">
        <h3>Inspector</h3>
      </div>

      <InspectorTabs activeTab={activeTab} onTabChange={onTabChange} />

      <div className="inspector-content">
        {selectedComponent ? (
          <div className="inspector-item-selected">
            <p>Component: <strong>{selectedComponent}</strong></p>
            <p style={{ fontSize: '12px', color: '#888', marginTop: '8px' }}>No properties available</p>
          </div>
        ) : (
          <div className="inspector-empty">
            <p>Select a component to edit</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default RightPanel
