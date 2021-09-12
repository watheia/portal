import { useContext } from "react"
import { UserContext } from "./UserContext"

export const usePrincipal = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`)
  }
  return context
}
