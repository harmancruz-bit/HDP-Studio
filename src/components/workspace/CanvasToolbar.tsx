import React, { useState } from 'react'
import Glyph from './Glyph'
import type { PreviewDevice } from './DevicePreview'

const devices = ['Desktop', 'Tablet', 'Mobile'] as const
const zoomLevels = ['50%', '75%', '100%', '125%', '150%', 'Fit'] as const

export default function CanvasToolbar({ device, onDeviceChange }: { device: PreviewDevice; onDeviceChange: (device: PreviewDevice) => void }) {
  const [zoom, setZoom] = useState<(typeof zoomLevels)[number]>('100%')
  return <div className="canvas-toolbar" aria-label="Canvas controls">
    <div className="toolbar-cluster device-picker">{devices.map(item => <button key={item} className={device === item ? 'active' : ''} onClick={() => onDeviceChange(item)}><span className={`device-symbol ${item.toLowerCase()}`} />{item}</button>)}</div>
    <i className="toolbar-divider" />
    <div className="toolbar-cluster zoom-picker"><button className="zoom-icon" aria-label="Zoom out">−</button>{zoomLevels.map(item => <button key={item} className={zoom === item ? 'active' : ''} onClick={() => setZoom(item)}>{item}</button>)}<button className="zoom-icon" aria-label="Zoom in">+</button></div>
    <i className="toolbar-divider" />
    <button className="center-canvas-button"><span className="center-icon">⊹</span><span>Center</span></button>
    <button className="toolbar-more" aria-label="More canvas options">•••</button>
  </div>
}
