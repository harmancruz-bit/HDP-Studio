import React, { useMemo, useState } from 'react'
import LibrarySection from './LibrarySection'
import Glyph from './Glyph'
import '../../styles/LeftPanel.css'

export type LibraryItem = { name: string; description: string; icon: string; badge?: string; preview?: boolean }
type Category = { title: string; icon: string; items: LibraryItem[] }

const library: Category[] = [
  { title: 'Layouts', icon: '▦', items: [{ name: 'Container', description: 'Responsive page wrapper', icon: '□', preview: true }, { name: 'Stack', description: 'Layer elements freely', icon: '◇' }, { name: 'Grid', description: 'Structured grid layout', icon: '▦' }] },
  { title: 'Sections', icon: '▤', items: [{ name: 'Hero', description: 'High-impact introduction', icon: '✦', badge: 'Popular', preview: true }, { name: 'Features', description: 'Showcase key benefits', icon: '▥' }, { name: 'Call to action', description: 'Convert with a clear next step', icon: '→' }] },
  { title: 'Components', icon: '◫', items: [{ name: 'Button', description: 'Interactive action trigger', icon: '●' }, { name: 'Card', description: 'Flexible content surface', icon: '▣', preview: true }, { name: 'Image', description: 'Responsive media block', icon: '◩' }] },
  { title: 'Forms', icon: '☷', items: [{ name: 'Text field', description: 'Single line input', icon: '—' }, { name: 'Select', description: 'Choose from a list', icon: '⌄' }, { name: 'Checkbox', description: 'Toggle a selection', icon: '✓' }] },
  { title: 'Navigation', icon: '↗', items: [{ name: 'Navbar', description: 'Primary site navigation', icon: '≡' }, { name: 'Tabs', description: 'Switch content views', icon: '⊟' }, { name: 'Sidebar', description: 'Persistent side navigation', icon: '▐' }] },
  { title: 'Dashboard', icon: '◰', items: [{ name: 'Data table', description: 'Organize structured data', icon: '▦' }, { name: 'Chart', description: 'Visualize your data', icon: '⌁', badge: 'Pro' }, { name: 'Metric', description: 'Highlight a key number', icon: '₊' }] },
  { title: 'Commerce', icon: '◒', items: [{ name: 'Product card', description: 'Display product details', icon: '▣' }, { name: 'Pricing', description: 'Present plans and prices', icon: '$' }, { name: 'Cart', description: 'Shopping cart summary', icon: '◉' }] },
  { title: 'Media', icon: '◩', items: [{ name: 'Video', description: 'Embed video content', icon: '▶' }, { name: 'Gallery', description: 'Curated image collection', icon: '▦' }, { name: 'Map', description: 'Interactive location view', icon: '⌖' }] },
  { title: 'Backend', icon: '◉', items: [{ name: 'API query', description: 'Connect to a data source', icon: '↗' }, { name: 'Database', description: 'Visual data collection', icon: '◫' }, { name: 'Storage', description: 'Manage file assets', icon: '☁' }] },
  { title: 'AI', icon: '✦', items: [{ name: 'AI prompt', description: 'Prompt-driven interaction', icon: '✦', badge: 'New' }, { name: 'Chat assistant', description: 'Conversational interface', icon: '◌', badge: 'New' }] },
  { title: 'Marketplace', icon: '♢', items: [{ name: 'Explore plugins', description: 'Extend your workspace', icon: '✦', badge: 'Pro' }, { name: 'Premium blocks', description: 'Polished starter sections', icon: '▣', badge: 'Pro' }] },
]

export default function LeftPanel({ onComponentSelect }: { onComponentSelect?: (component: string) => void }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ Layouts: true, Sections: true })
  const [query, setQuery] = useState('')
  const filteredLibrary = useMemo(() => library.map(category => ({ ...category, items: category.items.filter(item => `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase())) })).filter(category => category.items.length), [query])
  const clearSearch = () => setQuery('')
  return <aside className="left-panel">
    <div className="library-heading"><div><span className="eyebrow">BUILD SYSTEM</span><h2>Builder Library</h2><p>Reusable building blocks</p></div><button className="mini-add" aria-label="Create component"><Glyph name="plus" /></button></div>
    <label className={`library-filter ${query ? 'has-query' : ''}`}><Glyph name="search" /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Find a building block..." aria-label="Search building blocks" />{query ? <button className="search-clear" onClick={clearSearch} aria-label="Clear search">×</button> : <kbd>⌘ K</kbd>}</label>
    <div className="library-results"><span>{query ? `${filteredLibrary.reduce((total, category) => total + category.items.length, 0)} matches` : 'ALL BLOCKS'}</span>{query && <button onClick={clearSearch}>Clear</button>}</div>
    <div className="library-sections">{filteredLibrary.map(category => <LibrarySection key={category.title} title={category.title} icon={category.icon} items={category.items} isExpanded={query ? true : !!expanded[category.title]} isSearching={!!query} onToggle={() => setExpanded(current => ({ ...current, [category.title]: !current[category.title] }))} onComponentDrag={item => onComponentSelect?.(item)} />)}{query && !filteredLibrary.length && <div className="no-results"><Glyph name="search" /><b>No building blocks found</b><span>Try a different search term.</span></div>}</div>
    <div className="marketplace-card"><div className="marketplace-art"><i /><i /><i /><span><Glyph name="sparkles" /></span></div><span className="eyebrow">HDP MARKETPLACE</span><h3>Build more with less.</h3><p>Discover premium blocks made for your next idea.</p><button>Explore marketplace <Glyph name="arrow" /></button></div>
  </aside>
}
