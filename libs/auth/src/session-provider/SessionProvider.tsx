import { useEffect, useState } from "react"
import { SessionCtx } from "./SessionCtx"

import client from "../client"

export const SessionProvider = (props: JSX.IntrinsicAttributes) => {
  const [session, setSession] = useState<any>(false)
  const [user, setUser] = useState<any>(false)

  useEffect(() => {
    const session = client.auth.session()
    setSession(session)
    setUser(session?.user ?? false)
    const { data: authListener } = client.auth.onAuthStateChange(async (event, session) => {
      console.info("EVENT: ", event)
      setSession(session)
      setUser(session?.user ?? false)
    })

    return () => {
      authListener?.unsubscribe()
    }
  }, [])

  const value = {
    session,
    user
  }

  return <SessionCtx.Provider value={value} {...props} />
}
