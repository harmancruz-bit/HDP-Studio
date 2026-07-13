import React from 'react'

export default function BottomPanel(){
  const tabs = ['Console','Git','AI','Logs','Deploy','Errors']
  return (
    <footer className="bottom-panel">
      <div className="bottom-tabs">
        {tabs.map(t => <div key={t} className="bottom-tab">{t}</div>)}
      </div>
    </footer>
  )
}
