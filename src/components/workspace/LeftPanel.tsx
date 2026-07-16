import React, { useMemo, useState } from 'react'
import LibrarySection from './LibrarySection'
import Glyph from './Glyph'
import '../../styles/LeftPanel.css'

export type ProductModule = { name: string; description: string; icon: string; blocks: number }
export type Product = { name: string; icon: string; description: string; accent: string; modules: ProductModule[] }

const createModules = (names: Array<[string, string, string]>) => names.map(([name, description, icon], index) => ({ name, description, icon, blocks: 4 + ((index * 3) % 9) }))

export const products: Product[] = [
  { name: 'Mobile Apps', icon: '📱', accent: '#7c6cff', description: 'Native mobile experiences', modules: createModules([['Authentication', 'Sign in and account access', '◉'], ['Home', 'Primary app experience', '⌂'], ['Profile', 'User identity and preferences', '◌'], ['Settings', 'App controls and preferences', '⚙'], ['Notifications', 'Keep users informed', '◔'], ['Maps', 'Location and discovery', '⌖'], ['Camera', 'Capture and media flows', '◉'], ['Payments', 'Checkout and transactions', '◈']]) },
  { name: 'Websites', icon: '🌐', accent: '#48b9ff', description: 'Modern web experiences', modules: createModules([['Navigation', 'Headers and site navigation', '≡'], ['Content', 'Editorial content layouts', '▤'], ['Commerce', 'Products and storefronts', '◫'], ['Contact', 'Get in touch and capture leads', '✉']]) },
  { name: 'Landing Pages', icon: '🎯', accent: '#ff8e6b', description: 'Conversion-focused pages', modules: createModules([['Hero', 'High-impact introduction', '✦'], ['Features', 'Showcase key benefits', '▥'], ['Pricing', 'Plans and packages', '$'], ['Testimonials', 'Build social proof', '♥'], ['FAQ', 'Answer common questions', '?'], ['Footer', 'Complete the page', '▁']]) },
  { name: 'SaaS', icon: '☁', accent: '#58d6bd', description: 'Subscription software products', modules: createModules([['Authentication', 'Secure account access', '◉'], ['Workspace', 'Teams and projects', '▦'], ['Billing', 'Plans and subscriptions', '◈'], ['Settings', 'Product configuration', '⚙']]) },
  { name: 'CRM', icon: '🏢', accent: '#a98bff', description: 'Customer relationship systems', modules: createModules([['Authentication', 'Secure account access', '◉'], ['Dashboard', 'Business overview', '◰'], ['Pipeline', 'Manage deal stages', '↗'], ['Contacts', 'Customer directory', '◌'], ['Calendar', 'Schedule activity', '□'], ['Reports', 'Track performance', '▥'], ['Settings', 'Workspace configuration', '⚙']]) },
  { name: 'ERP', icon: '🏭', accent: '#e9a85d', description: 'Operations and business management', modules: createModules([['Dashboard', 'Operations overview', '◰'], ['Orders', 'Manage order lifecycle', '▤'], ['Procurement', 'Purchasing workflows', '◫'], ['Accounting', 'Financial operations', '$'], ['Settings', 'System configuration', '⚙']]) },
  { name: 'Marketplace', icon: '🛒', accent: '#f3789c', description: 'Multi-vendor commerce platforms', modules: createModules([['Browse', 'Explore listings and categories', '▦'], ['Product', 'Item detail experiences', '◫'], ['Seller', 'Vendor storefront tools', '◌'], ['Checkout', 'Purchase flow', '◈']]) },
  { name: 'POS', icon: '💳', accent: '#ffba57', description: 'Point-of-sale experiences', modules: createModules([['Register', 'Fast checkout interface', '▦'], ['Catalog', 'Products and modifiers', '◫'], ['Orders', 'Active order management', '▤'], ['Receipts', 'Customer purchase records', '▤']]) },
  { name: 'LMS', icon: '🎓', accent: '#6cc6ff', description: 'Learning and course platforms', modules: createModules([['Courses', 'Course library and pathways', '▦'], ['Lessons', 'Learning content experience', '▤'], ['Progress', 'Track learner completion', '◔'], ['Certificates', 'Course achievement records', '✦']]) },
  { name: 'Medical', icon: '🏥', accent: '#55d3a2', description: 'Healthcare product foundations', modules: createModules([['Patients', 'Patient directory and records', '◌'], ['Appointments', 'Care scheduling', '□'], ['Records', 'Medical documentation', '▤'], ['Portal', 'Patient self-service', '◫']]) },
  { name: 'Restaurant', icon: '🍔', accent: '#f09863', description: 'Dining and food service products', modules: createModules([['Menu', 'Food and drink catalog', '▤'], ['Ordering', 'Guest order experience', '◫'], ['Tables', 'Floor and seating plan', '▦'], ['Kitchen', 'Preparation workflow', '◰']]) },
  { name: 'Booking', icon: '🏨', accent: '#7e9dff', description: 'Reservations and scheduling', modules: createModules([['Availability', 'Search open inventory', '□'], ['Reservation', 'Confirm customer bookings', '◫'], ['Calendar', 'Manage the schedule', '▦'], ['Guests', 'Customer stay details', '◌']]) },
  { name: 'Inventory', icon: '📦', accent: '#d4aa55', description: 'Stock and warehouse systems', modules: createModules([['Overview', 'Stock health at a glance', '◰'], ['Products', 'Catalog and SKUs', '◫'], ['Warehouse', 'Locations and movement', '▦'], ['Suppliers', 'Vendor relationships', '◌']]) },
  { name: 'Finance', icon: '💰', accent: '#51c9a6', description: 'Financial product experiences', modules: createModules([['Accounts', 'Balances and account views', '◫'], ['Transactions', 'Activity and statements', '▤'], ['Budgets', 'Plan and track spending', '◰'], ['Insights', 'Financial reporting', '▥']]) },
  { name: 'Dashboards', icon: '📊', accent: '#55b8ff', description: 'Data-rich control centers', modules: createModules([['Overview', 'Top-level performance view', '◰'], ['Analytics', 'Explore key metrics', '▥'], ['Reports', 'Shareable data summaries', '▤'], ['Alerts', 'Important activity signals', '◔']]) },
  { name: 'Automation', icon: '⚡', accent: '#d98cff', description: 'Workflow and process products', modules: createModules([['Workflows', 'Visual process foundations', '↗'], ['Triggers', 'Start automated actions', '⚡'], ['History', 'Review workflow activity', '▤'], ['Settings', 'Automation controls', '⚙']]) },
  { name: 'AI Apps', icon: '🤖', accent: '#ab88ff', description: 'Intelligent product interfaces', modules: createModules([['Chat', 'Conversational experiences', '◌'], ['Assistant', 'Task-focused companion UI', '✦'], ['Knowledge', 'Information exploration', '▤'], ['Studio', 'AI product workspace', '◫']]) },
  { name: 'Blank Project', icon: '📂', accent: '#8c95a8', description: 'Start with a flexible foundation', modules: createModules([['App Shell', 'A clean product starting point', '□'], ['Navigation', 'Set up your product structure', '≡']]) },
]

const resourceLinks = [['Templates', '▦'], ['Favorites', '♥'], ['Recent', '◷'], ['Marketplace', '◈'], ['Documentation', '▤']]

export default function LeftPanel({ onComponentSelect }: { onComponentSelect?: (component: string) => void }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ 'Mobile Apps': true })
  const [selected, setSelected] = useState('Mobile Apps')
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()
  const visibleProducts = useMemo(() => products.map(product => {
    if (!normalizedQuery) return product
    const productMatches = `${product.name} ${product.description}`.toLowerCase().includes(normalizedQuery)
    const modules = productMatches ? product.modules : product.modules.filter(module => `${module.name} ${module.description}`.toLowerCase().includes(normalizedQuery))
    return { ...product, modules }
  }).filter(product => product.modules.length), [normalizedQuery])
  const moduleCount = visibleProducts.reduce((total, product) => total + product.modules.length, 0)

  return <aside className="left-panel">
    <div className="library-heading"><div><span className="eyebrow">HDP STUDIO</span><h2>Product Library</h2><p>Build complete digital products</p></div><button className="mini-add" aria-label="Create product"><Glyph name="plus" /></button></div>
    <label className={`library-filter ${query ? 'has-query' : ''}`}><Glyph name="search" /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search products and modules..." aria-label="Search products and modules" />{query ? <button className="search-clear" onClick={() => setQuery('')} aria-label="Clear search">×</button> : <kbd>⌘ K</kbd>}</label>
    <div className="library-results"><span>{query ? `${visibleProducts.length} products · ${moduleCount} modules` : 'PRODUCTS'}</span>{query && <button onClick={() => setQuery('')}>Clear</button>}</div>
    <div className="library-sections">{visibleProducts.map(product => <LibrarySection key={product.name} product={product} isExpanded={normalizedQuery ? true : !!expanded[product.name]} isSelected={selected === product.name} onToggle={() => setExpanded(current => ({ ...current, [product.name]: !current[product.name] }))} onSelect={(module) => { setSelected(product.name); onComponentSelect?.(module) }} />)}{query && !visibleProducts.length && <div className="no-results"><Glyph name="search" /><b>No products or modules found</b><span>Try a different search term.</span></div>}</div>
    <nav className="resources" aria-label="Resources"><span className="eyebrow">RESOURCES</span><div>{resourceLinks.map(([label, icon]) => <button key={label}><span>{icon}</span>{label}<Glyph name="arrow" /></button>)}</div></nav>
  </aside>
}
