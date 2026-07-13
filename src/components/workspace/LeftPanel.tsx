import React, { useState } from 'react'
import LibraryCategoryCard from './LibraryCategoryCard'
import '../../styles/LeftPanel.css'

const categories = [
  {
    id: 'layouts',
    title: 'Layouts',
    icon: 'grid',
    items: [
      { id: 'container', name: 'Container', description: 'Wrapper component', icon: 'box' },
      { id: 'row', name: 'Row', description: 'Horizontal layout', icon: 'layout-horizontal' },
      { id: 'column', name: 'Column', description: 'Vertical layout', icon: 'layout-vertical' },
      { id: 'grid', name: 'Grid', description: 'Grid layout', icon: 'grid' },
      { id: 'stack', name: 'Stack', description: 'Flexible stack', icon: 'layers' },
    ],
  },
  {
    id: 'sections',
    title: 'Sections',
    icon: 'layers',
    items: [
      { id: 'header', name: 'Header', description: 'Page header', icon: 'heading' },
      { id: 'hero', name: 'Hero', description: 'Hero section', icon: 'image' },
      { id: 'features', name: 'Features', description: 'Features list', icon: 'star' },
      { id: 'testimonials', name: 'Testimonials', description: 'Client feedback', icon: 'message-square' },
      { id: 'footer', name: 'Footer', description: 'Page footer', icon: 'align-bottom' },
      { id: 'cta', name: 'CTA', description: 'Call to action', icon: 'arrow-right' },
    ],
  },
  {
    id: 'components',
    title: 'Components',
    icon: 'box',
    items: [
      { id: 'button', name: 'Button', description: 'Interactive button', icon: 'square' },
      { id: 'card', name: 'Card', description: 'Content card', icon: 'rectangle' },
      { id: 'image', name: 'Image', description: 'Image element', icon: 'image' },
      { id: 'text', name: 'Text', description: 'Text content', icon: 'type' },
      { id: 'icon', name: 'Icon', description: 'SVG icon', icon: 'star' },
      { id: 'divider', name: 'Divider', description: 'Visual divider', icon: 'minus' },
      { id: 'spacer', name: 'Spacer', description: 'Spacing element', icon: 'maximize' },
      { id: 'avatar', name: 'Avatar', description: 'User avatar', icon: 'circle' },
      { id: 'badge', name: 'Badge', description: 'Status badge', icon: 'tag' },
    ],
  },
  {
    id: 'forms',
    title: 'Forms',
    icon: 'clipboard',
    items: [
      { id: 'input', name: 'Input', description: 'Text input field', icon: 'square' },
      { id: 'textarea', name: 'Textarea', description: 'Multi-line input', icon: 'rectangle' },
      { id: 'checkbox', name: 'Checkbox', description: 'Checkbox control', icon: 'check-square' },
      { id: 'radio', name: 'Radio', description: 'Radio button', icon: 'circle' },
      { id: 'select', name: 'Select', description: 'Dropdown select', icon: 'chevron-down' },
      { id: 'datepicker', name: 'DatePicker', description: 'Date selection', icon: 'calendar' },
      { id: 'switch', name: 'Switch', description: 'Toggle switch', icon: 'toggle-right' },
      { id: 'slider', name: 'Slider', description: 'Range slider', icon: 'sliders' },
    ],
  },
  {
    id: 'navigation',
    title: 'Navigation',
    icon: 'compass',
    items: [
      { id: 'navbar', name: 'Navbar', description: 'Top navigation bar', icon: 'layout-top' },
      { id: 'sidebar', name: 'Sidebar', description: 'Side navigation', icon: 'layout-left' },
      { id: 'bottomnav', name: 'Bottom Nav', description: 'Mobile nav bar', icon: 'layout-bottom' },
      { id: 'tabs', name: 'Tabs', description: 'Tab navigation', icon: 'tab' },
      { id: 'breadcrumb', name: 'Breadcrumb', description: 'Navigation path', icon: 'chevron-right' },
    ],
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: 'bar-chart-2',
    items: [
      { id: 'charts', name: 'Charts', description: 'Data visualization', icon: 'bar-chart-2' },
      { id: 'table', name: 'Table', description: 'Data table', icon: 'grid' },
      { id: 'calendar', name: 'Calendar', description: 'Calendar widget', icon: 'calendar' },
      { id: 'statistics', name: 'Statistics', description: 'Stat cards', icon: 'trending-up' },
      { id: 'kanban', name: 'Kanban', description: 'Task board', icon: 'columns' },
      { id: 'timeline', name: 'Timeline', description: 'Event timeline', icon: 'arrow-down' },
    ],
  },
  {
    id: 'commerce',
    title: 'Commerce',
    icon: 'shopping-cart',
    items: [
      { id: 'productcard', name: 'Product Card', description: 'Product display', icon: 'box' },
      { id: 'checkout', name: 'Checkout', description: 'Payment form', icon: 'credit-card' },
      { id: 'pricing', name: 'Pricing', description: 'Pricing table', icon: 'dollar-sign' },
      { id: 'cart', name: 'Cart', description: 'Shopping cart', icon: 'shopping-cart' },
    ],
  },
  {
    id: 'media',
    title: 'Media',
    icon: 'film',
    items: [
      { id: 'video', name: 'Video', description: 'Video player', icon: 'play-circle' },
      { id: 'audio', name: 'Audio', description: 'Audio player', icon: 'volume-2' },
      { id: 'gallery', name: 'Gallery', description: 'Image gallery', icon: 'image' },
      { id: 'map', name: 'Map', description: 'Map component', icon: 'map-pin' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'database',
    items: [
      { id: 'api', name: 'API', description: 'REST API', icon: 'globe' },
      { id: 'database', name: 'Database', description: 'Data storage', icon: 'database' },
      { id: 'auth', name: 'Authentication', description: 'Auth logic', icon: 'lock' },
      { id: 'storage', name: 'Storage', description: 'File storage', icon: 'cloud' },
    ],
  },
  {
    id: 'ai',
    title: 'AI',
    icon: 'zap',
    items: [
      { id: 'chat', name: 'Chat', description: 'Chat interface', icon: 'message-square' },
      { id: 'promptbox', name: 'Prompt Box', description: 'AI input', icon: 'edit' },
      { id: 'aiassistant', name: 'AI Assistant', description: 'Assistant widget', icon: 'zap' },
      { id: 'kb', name: 'Knowledge Base', description: 'KB interface', icon: 'book' },
    ],
  },
  {
    id: 'marketplace',
    title: 'Marketplace',
    icon: 'gift',
    items: [
      { id: 'community', name: 'Community', description: 'Community blocks', icon: 'users' },
      { id: 'premium', name: 'Premium', description: 'Premium blocks', icon: 'star' },
    ],
  },
]

interface LeftPanelProps {
  onComponentSelect?: (componentId: string) => void
}

const LeftPanel: React.FC<LeftPanelProps> = () => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    layouts: true,
    sections: true,
    components: true,
    forms: false,
    navigation: false,
    dashboard: false,
    commerce: false,
    media: false,
    backend: false,
    ai: false,
    marketplace: false,
  })

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }

  return (
    <div className="left-panel">
      <div className="panel-header">
        <h3>Builder Library</h3>
        <p className="panel-subtitle">Drag components to canvas</p>
      </div>

      <div className="library-grid">
        {categories.map((category) => (
          <LibraryCategoryCard
            key={category.id}
            category={category}
            isExpanded={expandedCategories[category.id]}
            onToggle={() => toggleCategory(category.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default LeftPanel
