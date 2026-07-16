import React, { useState } from 'react'
import CanvasToolbar from './CanvasToolbar'
import DevicePreview, { getTemplate, type PreviewDevice } from './DevicePreview'
import { useWorkspaceContext } from '../../context/WorkspaceContext'
import '../../styles/CenterCanvas.css'

const dimensions: Record<PreviewDevice, string> = { Desktop: '1440 × 900', Tablet: '834 × 1112', Mobile: '390 × 844' }

export default function CenterCanvas() {
  const [device, setDevice] = useState<PreviewDevice>('Mobile')
  const { currentProduct, currentModule, currentScreen } = useWorkspaceContext()
  const template = getTemplate(currentProduct, currentModule, currentScreen)
  return <main className="center-canvas"><div className="canvas-grid-background" /><CanvasToolbar device={device} onDeviceChange={setDevice} /><div className="canvas-viewport"><div className="ruler ruler-top"><span>0</span><span>320</span><span>640</span><span>960</span><span>1280</span></div><div className="ruler ruler-side"><span>0</span><span>240</span><span>480</span><span>720</span></div><div className="page-label"><i /> {device} · {dimensions[device]}</div><DevicePreview device={device} product={currentProduct} module={currentModule} screen={currentScreen} /><div className="template-caption"><span>{template?.module ?? 'Template'}</span><b>{template?.screen ?? 'No screen selected'}</b></div></div><div className="canvas-status"><span className="workspace-ready"><i /> Live preview</span><span>100% zoom</span><span>{dimensions[device]}</span><span>{device} renderer</span></div></main>
}
