import React from 'react'
import '../../styles/DevicePreview.css'

export type PreviewDevice = 'Desktop' | 'Tablet' | 'Mobile'

type TemplateRendererProps = { device: PreviewDevice }
type TemplateDefinition = {
  product: string
  module: string
  screen: string
  render: React.ComponentType<TemplateRendererProps>
}

function ModernLoginTemplate({ device }: TemplateRendererProps) {
  return <div className={`modern-login-template ${device.toLowerCase()}-template`}>
    <div className="login-backdrop"><span /><span /></div>
    <div className="login-status-bar"><span>{device === 'Mobile' ? '9:41' : '09:41'}</span><div><i className="signal" /><i className="wifi" /><i className="battery" /></div></div>
    <div className="login-content">
      <div className="login-logo" aria-label="Logo placeholder"><span>H</span></div>
      <div className="login-copy"><span className="login-kicker">WELCOME BACK</span><h1>Welcome to<br />your workspace</h1><p>Sign in to keep building great things.</p></div>
      <div className="login-actions"><button className="login-primary">Continue with email <b>→</b></button><button className="login-secondary">Create an account</button></div>
    </div>
    <p className="login-bottom">By continuing, you agree to our <u>Terms</u> and <u>Privacy Policy</u>.</p>
  </div>
}

const templates: TemplateDefinition[] = [
  { product: 'Mobile Apps', module: 'Authentication', screen: 'Modern Login', render: ModernLoginTemplate },
]

function EmptyTemplate() {
  return <div className="preview-empty-template"><span>Choose a screen to begin</span></div>
}

export function getTemplate(product: string | null, module: string | null, screen: string | null) {
  return templates.find(template => template.product === product && template.module === module && template.screen === screen)
}

export default function DevicePreview({ device, product, module, screen }: { device: PreviewDevice; product: string | null; module: string | null; screen: string | null }) {
  const template = getTemplate(product, module, screen)
  const Template = template?.render ?? EmptyTemplate
  const deviceClass = device.toLowerCase()
  const label = template ? `${template.module} · ${template.screen}` : 'No template selected'

  return <div className={`device-preview device-preview-${deviceClass}`} aria-label={`${device} preview: ${label}`}>
    {device === 'Desktop' && <div className="desktop-chrome"><i /><i /><i /><span /></div>}
    {device === 'Mobile' && <><div className="phone-speaker" /><div className="phone-camera" /></>}
    <div className="device-screen"><Template device={device} /></div>
    {device === 'Mobile' && <div className="phone-home-indicator" />}
  </div>
}
