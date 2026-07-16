import React from 'react'
import { useWorkspaceContext, workspaceValue } from '../../context/WorkspaceContext'

export default function CanvasOnboarding() {
  const { currentModule, currentProduct, currentScreen } = useWorkspaceContext()
  return <section className="canvas-onboarding">
    <div className="onboarding-illustration"><div className="illustration-window"><span /><span /><span /><div className="illustration-sidebar" /><div className="illustration-lines"><i /><i /><i /><i /></div><div className="illustration-card"><i /><i /></div></div><div className="illustration-cursor">⌁</div><div className="illustration-sparkle first">✦</div><div className="illustration-sparkle second">✦</div></div>
    <span className="eyebrow">WORKSPACE CONTEXT</span><h1>Current Product <em>{workspaceValue(currentProduct)}</em></h1>
    <div className="workspace-context-details"><div><span>Current Module</span><b>{workspaceValue(currentModule)}</b></div><div><span>Current Screen</span><b>{workspaceValue(currentScreen)}</b></div></div>
    <p>Ready to drop blocks</p>
  </section>
}
