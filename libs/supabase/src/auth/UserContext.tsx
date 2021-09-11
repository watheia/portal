import { createContext } from "react"

export const defaultUserContext = {
  session: null,
  user: null
}

export const UserContext = createContext(defaultUserContext)
