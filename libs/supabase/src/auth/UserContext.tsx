import { createContext } from "react"
import { Session, User } from "@supabase/gotrue-js"

export type Principal = {
  session: Session | null
  user: User | null
}

export const defaultUserContext = {
  session: null,
  user: null
}

export const UserContext = createContext<Principal>(defaultUserContext)
