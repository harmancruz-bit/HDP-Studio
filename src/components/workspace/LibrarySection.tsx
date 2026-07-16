import React from 'react'
import Glyph from './Glyph'
import '../../styles/LibrarySection.css'

export default function LibrarySection({ title, items, isExpanded, onToggle, onComponentDrag }: { title: string; items: string[]; isExpanded: boolean; onToggle: () => void; onComponentDrag: (item: string) => void }) {
  return <section className={`library-section ${isExpanded ? 'is-open' : ''}`}>
    <button className="section-header" onClick={onToggle}><span className="category-icon"><Glyph name="layers" /></span><b>{title}</b><span className="section-count">{items.length}</span><Glyph name="chevron" className="expand-icon" /></button>
    <div className="section-items">{items.map((item, index) => <button key={item} className={`library-item ${index === 0 && title === 'Layouts' ? 'selected' : ''}`} onClick={() => onComponentDrag(item)}><span className="item-icon">{index % 2 ? '◇' : '□'}</span><span><b>{item}</b><small>{title === 'Layouts' ? 'Structure your page' : `Add ${item.toLowerCase()}`}</small></span><Glyph name="grip" className="drag-handle" /></button>)}</div>
  </section>
}
