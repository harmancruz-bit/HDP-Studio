import React, { useState } from 'react'
import BuilderWorkspace from './components/workspace/BuilderWorkspace'
import './styles/App.css'

export default function App() {
  const [projectName] = useState('My Project')

  return (
    <div className="app-root">
      <BuilderWorkspace projectName={projectName} />
    </div>
  )
}
