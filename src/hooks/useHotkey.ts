import { useEffect } from 'react'

interface HotkeyConfig {
  key: string
  ctrl?: boolean
  meta?: boolean
  shift?: boolean
  alt?: boolean
}

export function useHotkey(
  config: HotkeyConfig | string,
  handler: (event: KeyboardEvent) => void
) {
  useEffect(() => {
    const hotkey = typeof config === 'string' ? { key: config } : config

    function handleKeyDown(event: KeyboardEvent) {
      const ctrlOrMeta = hotkey.ctrl || hotkey.meta
      const modifierMatch = ctrlOrMeta
        ? event.ctrlKey || event.metaKey
        : true
      const shiftMatch = hotkey.shift ? event.shiftKey : true
      const altMatch = hotkey.alt ? event.altKey : true
      const keyMatch = event.key.toLowerCase() === hotkey.key.toLowerCase()

      if (modifierMatch && shiftMatch && altMatch && keyMatch) {
        handler(event)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [config, handler])
}
