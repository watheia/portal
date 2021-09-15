import { useContext } from "react"
import SessionCtx from "./SessionCtx"

export const useSession = () => {
  const context = useContext(SessionCtx)
  if (context === undefined) {
    throw new Error(`useUser must be used within a SessionCtxProvider.`)
  }
  return context
}
