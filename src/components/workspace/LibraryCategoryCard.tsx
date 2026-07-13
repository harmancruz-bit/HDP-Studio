import React from 'react'
import LibraryComponentItem from './LibraryComponentItem'
import '../../styles/LibraryCategoryCard.css'

interface CategoryItem {
  id: string
  name: string
  description: string
  icon: string
}

interface Category {
  id: string
  title: string
  icon: string
  items: CategoryItem[]
}

interface LibraryCategoryCardProps {
  category: Category
  isExpanded: boolean
  onToggle: () => void
}

const getIconSvg = (iconName: string) => {
  const icons: Record<string, string> = {
    grid: 'M3 3h18v18H3z M3 9h18M3 15h18M9 3v18M15 3v18',
    box: 'M3 3h18v18H3z',
    'layout-horizontal': 'M3 5h18v14H3z M3 11h18',
    'layout-vertical': 'M3 5h18v14H3z M9 5v14',
    'layout-top': 'M3 3h18v6H3z M3 11h18v8H3z',
    'layout-left': 'M3 3h6v18H3z M11 3h10v18H11z',
    'layout-bottom': 'M3 3h18v8H3z M3 13h18v8H3z',
    layers: 'M12 2l9 5v7l-9 5-9-5v-7l9-5z',
    heading: 'M3 3h18v3H3z M3 10h18v3H3z',
    image: 'M3 3h18v18H3z M6 6l5 5 9-9 0 12H3V6z',
    star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    'message-square': 'M3 3h18v14H5l-2 3v-3H3V3z',
    'arrow-right': 'M5 12h14M12 5l7 7-7 7',
    square: 'M3 3h18v18H3z',
    rectangle: 'M3 5h18v14H3z',
    type: 'M4 7h16M4 12h16M4 17h16',
    minus: 'M5 12h14',
    maximize: 'M8 3h8v8H8z M8 13h8v8H8z',
    circle: 'M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z',
    tag: 'M3 9l9-6 9 6v6l-9 6-9-6v-6z',
    clipboard: 'M9 2h6v3H9V2z M3 5h18v15H3V5z',
    'check-square': 'M3 3h18v18H3z M7 12l3 3 7-7',
    'chevron-down': 'M6 9l6 6 6-6',
    'chevron-right': 'M9 6l6 6-6 6',
    calendar: 'M3 5h18v15H3z M3 9h18M9 2v5M15 2v5',
    'toggle-right': 'M3 12h14a3 3 0 110 6h-2a3 3 0 01-3-3v-6a3 3 0 013-3h2a3 3 0 110 6H3',
    sliders: 'M4 9h5M15 9h5M4 15h5M15 15h5M9 6v6M9 13v6',
    compass: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
    'bar-chart-2': 'M3 12h4v8H3zM11 5h4v15h-4zM19 2h4v18h-4z',
    'trending-up': 'M23 6l-9.5 9.5-5-5L1 18',
    columns: 'M3 3h5v18H3z M10 3h5v18h-5z M17 3h5v18h-5z',
    'arrow-down': 'M12 5v14M5 12l7 7 7-7',
    'shopping-cart': 'M9 2L7 6H4l1 12h14l1-12h-3L15 2z',
    'credit-card': 'M3 5h18v14H3z M3 9h18',
    'dollar-sign': 'M12 2v20M7 5h10a3 3 0 010 6h-6a3 3 0 010 6h10',
    'film': 'M6 4h12v3H6zM6 9h12v3H6zM6 14h12v3H6z',
    'play-circle': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z M10 8v8l6-4z',
    'volume-2': 'M3 9v6h4l5 5V4L7 9H3zM15.54 3.54a9 9 0 010 12.72',
    'map-pin': 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 13a2 2 0 100-4 2 2 0 000 4z',
    globe: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z M12 4.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z',
    database: 'M4 10h16v8H4zM4 6h16v3H4zM4 18h16',
    lock: 'M7 10a5 5 0 0110 0v3h2V9a7 7 0 00-14 0v4h2v-3z',
    cloud: 'M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19a2 2 0 012 2 2 2 0 01-2 2h-1.35zM3 13.5h2.26c.08-.65.23-1.28.46-1.89L2.89 10c-.6 1.23-.94 2.6-.94 4.05 0 5.56 4.51 10.05 10.07 10.05.57 0 1.13-.05 1.69-.12l-1.46-1.46C13.21 21.5 12.52 22 12 22c-4.42 0-8-3.58-8-8.5z',
    zap: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
    edit: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z',
    book: 'M4 6h16v14H4z M4 6L12 2l8 4',
    gift: 'M12 3l-4 4h-4v10h16V7h-4l4-4H12z',
    users: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M3 21v-2a4 4 0 013-3.87',
  }
  return icons[iconName] || icons.box
}

const LibraryCategoryCard: React.FC<LibraryCategoryCardProps> = ({
  category,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className="library-category-card">
      <button className="category-header" onClick={onToggle}>
        <div className="category-header-left">
          <div className="category-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={getIconSvg(category.icon)} />
            </svg>
          </div>
          <div className="category-info">
            <h4 className="category-title">{category.title}</h4>
            <p className="category-count">{category.items.length} components</p>
          </div>
        </div>
        <svg className={`expand-icon ${isExpanded ? 'expanded' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isExpanded && (
        <div className="category-items">
          {category.items.map((item) => (
            <LibraryComponentItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default LibraryCategoryCard
