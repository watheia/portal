import { createContext } from "react"
import { Session } from "@supabase/supabase-js"

const defaultContext = {
  session: null
}

export const SessionCtx = createContext<{
  session: Session | null
}>(defaultContext)

export default SessionCtx
