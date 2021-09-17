import { createContext } from "react"
import { Session, User } from "@supabase/supabase-js"

const defaultContext = {
  session: null,
  user: null
}

export const SessionCtx = createContext<{
  session: Session | null
  user: User | null
}>(defaultContext)

export default SessionCtx
