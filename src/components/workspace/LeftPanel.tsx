import React, { useState } from 'react'
import LibrarySection from './LibrarySection'
import '../../styles/LeftPanel.css'

interface LeftPanelProps {
  onComponentSelect?: (componentId: string) => void
}

const components = {
  layouts: ['Container', 'Row', 'Column', 'Grid', 'Stack'],
  sections: ['Header', 'Hero', 'Features', 'Testimonials', 'Footer', 'CTA'],
  components: ['Button', 'Card', 'Image', 'Text', 'Icon', 'Divider', 'Spacer', 'Avatar', 'Badge'],
  forms: ['Input', 'Textarea', 'Checkbox', 'Radio', 'Select', 'DatePicker', 'Switch', 'Slider'],
  navigation: ['Navbar', 'Sidebar', 'Bottom Navigation', 'Tabs', 'Breadcrumb'],
  dashboard: ['Charts', 'Table', 'Calendar', 'Statistics', 'Kanban', 'Timeline'],
  media: ['Video', 'Audio', 'Gallery', 'Map'],
  commerce: ['Product Card', 'Checkout', 'Pricing', 'Cart'],
  ai: ['Chat', 'Prompt Box', 'AI Assistant', 'Knowledge Base'],
  backend: ['API', 'Database', 'Authentication', 'Storage'],
  marketplace: ['Community Components', 'Premium Blocks'],
}

const LeftPanel: React.FC<LeftPanelProps> = ({ onComponentSelect }) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    layouts: true,
    sections: true,
    components: true,
    forms: false,
    navigation: false,
    dashboard: false,
    media: false,
    commerce: false,
    ai: false,
    backend: false,
    marketplace: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleComponentDrag = (component: string) => {
    console.log(`Dragging component: ${component}`)
  }

  return (
    <div className="left-panel">
      <div className="panel-header">
        <h3>Builder Library</h3>
      </div>

      <div className="library-sections">
        {Object.entries(components).map(([key, items]) => (
          <LibrarySection
            key={key}
            title={key.charAt(0).toUpperCase() + key.slice(1)}
            items={items}
            isExpanded={expandedSections[key]}
            onToggle={() => toggleSection(key)}
            onComponentDrag={handleComponentDrag}
          />
        ))}
      </div>
    </div>
  )
}

export default LeftPanel
