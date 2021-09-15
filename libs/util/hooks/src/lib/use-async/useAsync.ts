import { useState, useCallback, useEffect } from "react"
import { AsyncStatus } from "@watheia/model"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseAsync {
  count: number
  increment: () => void
}

/**
 *
 * @param asyncFunction the function to be executed
 * @param immediate true if function should be called upon initialization
 * @returns An object with a shape of  { execute, status, value, error }
 */
export const useAsync = <T, E = string>(
  asyncFunction: () => Promise<T>,
  immediate = true
) => {
  const [status, setStatus] = useState<AsyncStatus>("idle")
  const [value, setValue] = useState<T | null>(null)
  const [error, setError] = useState<E | null>(null)
  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(async () => {
    setStatus("pending")
    setValue(null)
    setError(null)
    try {
      const response = await asyncFunction()
      setValue(response)
      setStatus("success")
    } catch (error: any) {
      setError(error.message)
      setStatus("error")
    }
  }, [asyncFunction])
  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])
  return { execute, status, value, error }
}
