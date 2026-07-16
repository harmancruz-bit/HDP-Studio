import React from 'react'

type GlyphName = 'search' | 'undo' | 'redo' | 'play' | 'bell' | 'chevron' | 'grip' | 'plus' | 'layers' | 'sparkles' | 'terminal' | 'cloud' | 'code' | 'arrow'

const glyphs: Record<GlyphName, string> = {
  search: '⌕', undo: '↶', redo: '↷', play: '▶', bell: '♧', chevron: '⌄', grip: '⠿', plus: '+',
  layers: '◫', sparkles: '✦', terminal: '›_', cloud: '☁', code: '</>', arrow: '→',
}

export default function Glyph({ name, className = '' }: { name: GlyphName; className?: string }) {
  return <span className={`glyph ${className}`} aria-hidden="true">{glyphs[name]}</span>
}
