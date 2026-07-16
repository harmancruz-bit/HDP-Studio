import React, { useState } from 'react'
import LibrarySection from './LibrarySection'
import Glyph from './Glyph'
import '../../styles/LeftPanel.css'

const library = [
  ['Layouts', ['Container', 'Stack', 'Grid']], ['Sections', ['Hero', 'Features', 'Call to action']], ['Components', ['Button', 'Card', 'Image']],
  ['Forms', ['Text field', 'Select', 'Checkbox']], ['Navigation', ['Navbar', 'Tabs', 'Sidebar']], ['Dashboard', ['Data table', 'Chart', 'Metric']],
  ['Commerce', ['Product card', 'Pricing', 'Cart']], ['Media', ['Video', 'Gallery', 'Map']], ['Backend', ['API query', 'Database', 'Storage']],
  ['AI', ['AI prompt', 'Chat assistant']], ['Marketplace', ['Explore plugins', 'Premium blocks']],
]

export default function LeftPanel({ onComponentSelect }: { onComponentSelect?: (component: string) => void }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ Layouts: true, Sections: true })
  return <aside className="left-panel">
    <div className="library-heading"><div><span className="eyebrow">BUILD</span><h2>Library</h2></div><button className="mini-add"><Glyph name="plus" /></button></div>
    <div className="library-filter"><Glyph name="search" /><input placeholder="Search components" /><kbd>/</kbd></div>
    <div className="library-sections">{library.map(([title, items]) => <LibrarySection key={title} title={title} items={items} isExpanded={!!expanded[title]} onToggle={() => setExpanded(p => ({ ...p, [title]: !p[title] }))} onComponentDrag={item => onComponentSelect?.(item)} />)}</div>
    <button className="marketplace-link"><Glyph name="sparkles" /><span><b>HDP Marketplace</b><small>Discover more building blocks</small></span><Glyph name="arrow" /></button>
  </aside>
}
