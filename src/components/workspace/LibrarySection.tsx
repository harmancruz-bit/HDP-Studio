import React from 'react'
import type { Product } from './LeftPanel'
import Glyph from './Glyph'
import '../../styles/LibrarySection.css'

export default function LibrarySection({ product, isExpanded, isSelected, onToggle, onSelect }: { product: Product; isExpanded: boolean; isSelected: boolean; onToggle: () => void; onSelect: (module: string) => void }) {
  const blockCount = product.modules.reduce((total, module) => total + module.blocks, 0)
  return <section className={`library-section ${isExpanded ? 'is-open' : ''} ${isSelected ? 'is-selected' : ''}`} style={{ '--product-accent': product.accent } as React.CSSProperties}>
    <button className="section-header" onClick={onToggle} aria-expanded={isExpanded}>
      <span className="product-icon">{product.icon}</span><span className="category-copy"><b>{product.name}</b><small>{product.description}</small></span><span className="section-count">{blockCount}</span><Glyph name="chevron" className="expand-icon" />
    </button>
    <div className="section-items"><div>{product.modules.map(module => <button key={module.name} className="library-item" onClick={() => onSelect(module.name)}><span className="item-icon">{module.icon}</span><span className="item-copy"><b>{module.name}</b><small>{module.description}</small></span><span className="module-count">{module.blocks}</span><Glyph name="chevron" className="module-chevron" /></button>)}</div></div>
  </section>
}
