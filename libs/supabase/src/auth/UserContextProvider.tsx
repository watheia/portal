import { useEffect, useState } from "react"
import { supabase } from ".."
import { UserContext } from "./UserContext"

export const UserContextProvider = (props: JSX.IntrinsicAttributes) => {
  const [session, setSession] = useState<any>(false)
  const [user, setUser] = useState<any>(false)

  useEffect(() => {
    const session = supabase.auth.session()
    setSession(session)
    setUser(session?.user ?? false)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.info("EVENT: ", event)
        setSession(session)
        setUser(session?.user ?? false)
      }
    )

    return () => {
      authListener?.unsubscribe()
    }
  }, [])

  const value = {
    session,
    user
  }
  return <UserContext.Provider value={value} {...props} />
}
