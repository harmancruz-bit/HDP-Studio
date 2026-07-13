import React from 'react'
import '../../styles/LibrarySection.css'

interface LibrarySectionProps {
  title: string
  items: string[]
  isExpanded: boolean
  onToggle: () => void
  onComponentDrag: (component: string) => void
}

const LibrarySection: React.FC<LibrarySectionProps> = ({
  title,
  items,
  isExpanded,
  onToggle,
  onComponentDrag,
}) => {
  return (
    <div className="library-section">
      <button className="section-header" onClick={onToggle}>
        <svg className={`expand-icon ${isExpanded ? 'expanded' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <span className="section-title">{title}</span>
        <span className="section-count">{items.length}</span>
      </button>

      {isExpanded && (
        <div className="section-items">
          {items.map((item) => (
            <div
              key={item}
              className="library-item"
              draggable
              onDragStart={() => onComponentDrag(item)}
              title={`Drag ${item} to canvas`}
            >
              <div className="item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" opacity="0.6">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </div>
              <span className="item-name">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LibrarySection
