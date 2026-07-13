import React, { useState } from 'react'
import '../../styles/BottomBar.css'

const BottomBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'console' | 'git' | 'deploy' | 'logs' | 'errors' | 'terminal'>('console')

  return (
    <div className="bottom-bar">
      <div className="bottom-tabs">
        <button className={`tab-button ${activeTab === 'console' ? 'active' : ''}`} onClick={() => setActiveTab('console')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
          Console
        </button>
        <button className={`tab-button ${activeTab === 'git' ? 'active' : ''}`} onClick={() => setActiveTab('git')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="18" r="3" />
            <circle cx="6" cy="6" r="3" />
            <path d="M13 6h-2v6h2M9 9v4" />
          </svg>
          Git
        </button>
        <button className={`tab-button ${activeTab === 'deploy' ? 'active' : ''}`} onClick={() => setActiveTab('deploy')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
          Deploy
        </button>
        <button className={`tab-button ${activeTab === 'logs' ? 'active' : ''}`} onClick={() => setActiveTab('logs')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Logs
        </button>
        <button className={`tab-button ${activeTab === 'errors' ? 'active' : ''}`} onClick={() => setActiveTab('errors')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          Errors
        </button>
        <button className={`tab-button ${activeTab === 'terminal' ? 'active' : ''}`} onClick={() => setActiveTab('terminal')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
          Terminal
        </button>
      </div>

      <div className="bottom-content">
        {activeTab === 'console' && <p>Console output will appear here</p>}
        {activeTab === 'git' && <p>Git status and operations</p>}
        {activeTab === 'deploy' && <p>Deployment logs and status</p>}
        {activeTab === 'logs' && <p>Application logs</p>}
        {activeTab === 'errors' && <p>Error messages</p>}
        {activeTab === 'terminal' && <p>Terminal output</p>}
      </div>
    </div>
  )
}

export default BottomBar
