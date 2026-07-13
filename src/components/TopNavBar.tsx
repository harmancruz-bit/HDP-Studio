import React from 'react'

export default function TopNavBar() {
  return (
    <header className="top-nav">
      <div className="nav-left">
        <div className="project-selector">HDP Studio</div>
      </div>
      <div className="nav-center">
        <input className="search" placeholder="Search..." />
      </div>
      <div className="nav-right">
        <button className="icon-btn">🔔</button>
        <button className="user-btn">User</button>
      </div>
    </header>
  )
}
