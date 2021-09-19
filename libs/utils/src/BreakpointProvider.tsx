import React, { ReactNode, useCallback, useContext, useEffect, useState } from "react"
import { useIsSSR } from "@react-aria/ssr"

interface Breakpoints {
  S?: number
  M?: number
  L?: number
  [custom: string]: number | undefined
}

interface BreakpointContext {
  matchedBreakpoints: string[]
}

const Context = React.createContext<BreakpointContext>(null)
Context.displayName = "BreakpointContext"

interface BreakpointProviderProps {
  children?: ReactNode
  matchedBreakpoints: string[]
}

export function BreakpointProvider(props: BreakpointProviderProps) {
  const { children, matchedBreakpoints } = props
  return <Context.Provider value={{ matchedBreakpoints }}>{children}</Context.Provider>
}

export function useMatchedBreakpoints(breakpoints: Breakpoints): string[] {
  const entries = Object.entries(breakpoints).sort(
    ([, valueA], [, valueB]) => valueB - valueA
  )
  const breakpointQueries = entries.map(([, value]) => `(min-width: ${value}px)`)

  const supportsMatchMedia =
    typeof window !== "undefined" && typeof window.matchMedia === "function"
  const getBreakpointHandler = useCallback(() => {
    const matched = []
    for (const i in breakpointQueries) {
      const query = breakpointQueries[i]
      if (window.matchMedia(query).matches) {
        matched.push(entries[i][0])
      }
    }
    matched.push("base")
    return matched
  }, [breakpointQueries, entries])

  const [breakpoint, setBreakpoint] = useState(() =>
    supportsMatchMedia ? getBreakpointHandler() : ["base"]
  )

  useEffect(() => {
    if (!supportsMatchMedia) {
      return () => {
        return void 0
      }
    }

    const onResize = () => {
      setBreakpoint(getBreakpointHandler())
    }

    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [getBreakpointHandler, supportsMatchMedia])

  // If in SSR, the media query should never match. Once the page hydrates,
  // this will update and the real value will be returned.
  const isSSR = useIsSSR()
  return isSSR ? ["base"] : breakpoint
}

export function useBreakpoint(): BreakpointContext {
  return useContext(Context)
}
