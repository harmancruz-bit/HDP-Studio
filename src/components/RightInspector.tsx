import React from 'react'

export default function RightInspector(){
  const sections = ['Properties','Styles','Actions','Backend','Responsive']
  return (
    <aside className="right-inspector">
      {sections.map(s => (
        <section key={s} className="inspector-section">
          <h3>{s}</h3>
          <div className="placeholder">No properties — UI only</div>
        </section>
      ))}
    </aside>
  )
}
