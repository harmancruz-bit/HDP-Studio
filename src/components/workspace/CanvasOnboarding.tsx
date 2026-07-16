import React from 'react'
import Glyph from './Glyph'

export default function CanvasOnboarding() {
  return <section className="canvas-onboarding">
    <div className="onboarding-illustration"><div className="illustration-window"><span /><span /><span /><div className="illustration-sidebar" /><div className="illustration-lines"><i /><i /><i /><i /></div><div className="illustration-card"><i /><i /></div></div><div className="illustration-cursor">⌁</div><div className="illustration-sparkle first">✦</div><div className="illustration-sparkle second">✦</div></div>
    <span className="eyebrow">CREATE YOUR FIRST SCREEN</span><h1>Bring your next idea <em>to life.</em></h1><p>Build a polished interface visually. Start with a blank canvas, a curated template, or bring in an existing project.</p>
    <div className="onboarding-actions"><button className="onboarding-primary"><Glyph name="plus" /> Create Blank Project</button><button className="onboarding-secondary"><Glyph name="layers" /> Choose Template</button><button className="onboarding-text"><Glyph name="arrow" /> Import Project</button></div>
    <div className="recent-projects"><div className="recent-heading"><span>RECENT PROJECTS</span><button>View all <Glyph name="arrow" /></button></div><div className="recent-row"><div className="recent-preview"><i /><i /><i /></div><div><b>Untitled workspace</b><span>Edited just now · Desktop</span></div><button className="recent-open"><Glyph name="arrow" /></button></div></div>
  </section>
}
