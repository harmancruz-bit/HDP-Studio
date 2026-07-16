import React from 'react'
import type { LibraryItem } from './LeftPanel'
import Glyph from './Glyph'
import '../../styles/LibrarySection.css'

export default function LibrarySection({ title, icon, items, isExpanded, isSearching, onToggle, onComponentDrag }: { title: string; icon: string; items: LibraryItem[]; isExpanded: boolean; isSearching: boolean; onToggle: () => void; onComponentDrag: (item: string) => void }) {
  return <section className={`library-section ${isExpanded ? 'is-open' : ''}`}>
    <button className="section-header" onClick={onToggle}><span className="category-icon">{icon}</span><span className="category-copy"><b>{title}</b><small>{items.length} blocks</small></span><span className="section-count">{items.length}</span><Glyph name="chevron" className="expand-icon" /></button>
    <div className="section-items"><div>{items.map((item, index) => <button key={item.name} className={`library-item ${index === 0 && title === 'Layouts' && !isSearching ? 'selected' : ''}`} onClick={() => onComponentDrag(item.name)}><span className="item-icon">{item.icon}</span><span className="item-copy"><span><b>{item.name}</b>{item.badge && <em className={`item-badge ${item.badge.toLowerCase()}`}>{item.badge}</em>}</span><small>{item.description}</small></span>{item.preview && <span className="preview-dot" title="Preview available" />}<Glyph name="grip" className="drag-handle" /></button>)}</div></div>
  </section>
}
