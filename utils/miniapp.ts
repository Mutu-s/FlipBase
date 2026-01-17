/**
 * Farcaster Miniapp SDK utilities
 * Based on official Farcaster Mini Apps documentation
 */

export interface MiniappContext {
  user?: {
    fid: string
    username?: string
    displayName?: string
    pfp?: string
  }
  cast?: {
    hash: string
    author: {
      fid: string
      username?: string
    }
  }
}

export interface MiniappActions {
  ready: () => void
  openUrl: (url: string) => void
  composeCast: (params: { text: string; embeds?: string[] }) => void
  viewCast: (castHash: string) => void
  signIn: () => Promise<void>
}

/**
 * Check if we're running in a Farcaster miniapp context
 */
export function isInMiniapp(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  return !!(window as any).farcaster?.miniapp
}

/**
 * Get the miniapp SDK instance
 */
export function getMiniappSDK(): {
  actions: MiniappActions | null
  context: MiniappContext | null
} {
  if (typeof window === 'undefined') {
    return { actions: null, context: null }
  }

  const miniapp = (window as any).farcaster?.miniapp

  if (!miniapp) {
    return { actions: null, context: null }
  }

  return {
    actions: miniapp.actions || null,
    context: miniapp.context || null,
  }
}

/**
 * Open a URL using SDK if available, fallback to window.open
 */
export function openUrl(url: string): void {
  const { actions } = getMiniappSDK()
  if (actions?.openUrl) {
    actions.openUrl(url)
  } else {
    // Fallback for non-miniapp contexts
    window.open(url, '_blank')
  }
}

/**
 * Compose a cast using SDK if available
 */
export function composeCast(text: string, embeds?: string[]): void {
  const { actions } = getMiniappSDK()
  if (actions?.composeCast) {
    actions.composeCast({ text, embeds })
  } else {
    console.warn('composeCast not available - not in miniapp context')
  }
}

/**
 * View a cast using SDK if available
 */
export function viewCast(castHash: string): void {
  const { actions } = getMiniappSDK()
  if (actions?.viewCast) {
    actions.viewCast(castHash)
  } else {
    console.warn('viewCast not available - not in miniapp context')
  }
}

/**
 * Sign in using SDK if available
 */
export async function signIn(): Promise<void> {
  const { actions } = getMiniappSDK()
  if (actions?.signIn) {
    await actions.signIn()
  } else {
    console.warn('signIn not available - not in miniapp context')
  }
}

/**
 * Get current user from miniapp context
 */
export function getCurrentUser(): MiniappContext['user'] | null {
  const { context } = getMiniappSDK()
  return context?.user || null
}

/**
 * Get current cast from miniapp context (if opened from a cast)
 */
export function getCurrentCast(): MiniappContext['cast'] | null {
  const { context } = getMiniappSDK()
  return context?.cast || null
}
