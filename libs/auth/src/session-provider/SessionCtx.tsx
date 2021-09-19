import { createContext } from "react"
import { Session, User } from "@supabase/supabase-js"

export type SessionCtxProps = {
  session: Session | null
  user: User | null
}

const defaultContext = {
  session: null,
  user: null
}

export const SessionCtx = createContext<SessionCtxProps>(defaultContext)

export default SessionCtx
