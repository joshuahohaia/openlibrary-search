import { useState, useEffect, useRef } from 'react'

const imageCache = new Map<string, boolean>()

export function useCachedImage(src: string) {
  const [loaded, setLoaded] = useState(() => imageCache.get(src) ?? false)
  const imgRef = useRef<HTMLImageElement>(null!)

  useEffect(() => {
    if (imageCache.get(src)) {
      setLoaded(true)
      return
    }

    const img = imgRef.current
    if (img?.complete && img.naturalWidth > 0) {
      imageCache.set(src, true)
      setLoaded(true)
    }
  }, [src])

  const handleLoad = () => {
    imageCache.set(src, true)
    setLoaded(true)
  }

  return { loaded, imgRef, handleLoad }
}
