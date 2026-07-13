import React from 'react'

const items = ['Dashboard','Projects','Components','Templates','AI','Marketplace','Assets','Settings']

export default function LeftSidebar(){
  return (
    <aside className="left-sidebar">
      <nav>
        {items.map(item => (
          <div key={item} className="sidebar-item">{item}</div>
        ))}
      </nav>
    </aside>
  )
}
