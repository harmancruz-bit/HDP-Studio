import { createContext, useContext, useMemo, useState } from 'react'

export type WorkspaceContextValue = {
  currentProduct: string | null
  currentModule: string | null
  currentScreen: string | null
  currentBlock: string | null
  selectProduct: (product: string) => void
  selectModule: (module: string) => void
  selectScreen: (screen: string) => void
  selectBlock: (block: string | null) => void
}

const WorkspaceContext = createContext<WorkspaceContextValue | undefined>(undefined)

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [currentProduct, setCurrentProduct] = useState<string | null>('Mobile Apps')
  const [currentModule, setCurrentModule] = useState<string | null>('Authentication')
  const [currentScreen, setCurrentScreen] = useState<string | null>('Modern Login')
  const [currentBlock, setCurrentBlock] = useState<string | null>(null)

  const value = useMemo<WorkspaceContextValue>(() => ({
    currentProduct, currentModule, currentScreen, currentBlock,
    selectProduct: (product) => {
      setCurrentProduct(product)
      setCurrentModule(product === 'Mobile Apps' ? 'Authentication' : null)
      setCurrentScreen(product === 'Mobile Apps' ? 'Modern Login' : null)
      setCurrentBlock(null)
    },
    selectModule: (module) => {
      setCurrentModule(module)
      setCurrentScreen(currentProduct === 'Mobile Apps' && module === 'Authentication' ? 'Modern Login' : null)
      setCurrentBlock(null)
    },
    selectScreen: (screen) => { setCurrentScreen(screen); setCurrentBlock(null) },
    selectBlock: setCurrentBlock,
  }), [currentBlock, currentModule, currentProduct, currentScreen])

  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>
}

export function useWorkspaceContext() {
  const context = useContext(WorkspaceContext)
  if (!context) throw new Error('useWorkspaceContext must be used within a WorkspaceProvider')
  return context
}

export const workspaceValue = (value: string | null) => value ?? 'Not selected'
