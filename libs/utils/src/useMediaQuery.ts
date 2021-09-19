import { useEffect, useState } from "react"
import { useIsSSR } from "@react-aria/ssr"

export function useMediaQuery(query: string) {
  const supportsMatchMedia =
    typeof window !== "undefined" && typeof window.matchMedia === "function"
  const [matches, setMatches] = useState(() =>
    supportsMatchMedia ? window.matchMedia(query).matches : false
  )

  useEffect(() => {
    if (!supportsMatchMedia) {
      return () => {
        return void 0
      }
    }

    const mq = window.matchMedia(query)
    const onChange = (evt) => {
      setMatches(evt.matches)
    }

    mq.addListener(onChange)
    return () => {
      mq.removeListener(onChange)
    }
  }, [supportsMatchMedia, query])

  // If in SSR, the media query should never match. Once the page hydrates,
  // this will update and the real value will be returned.
  const isSSR = useIsSSR()
  return isSSR ? false : matches
}
