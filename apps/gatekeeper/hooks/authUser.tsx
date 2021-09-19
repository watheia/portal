import { useEffect, useState, createContext, useContext } from "react"
import { supabase } from "../utils/initSupabase"
import { useRouter } from "next/router"
import { Session, User } from "@supabase/supabase-js"

export const SignOut = async () => {
  await supabase.auth.signOut()
}

export const RequireAuth = () => {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/auth")
    }
  }, [user, router])

  return <></>
}

export const AuthRedirect = (to = "/home") => {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push(to)
    }
  }, [user, router, to])
}

export type UserContextType = {
  user: User | boolean
  session: Session | boolean
}

export const UserContext = createContext<UserContextType>({ user: false, session: false })

export const UserContextProvider = (props) => {
  const [session, setSession] = useState<Session | boolean>(false)
  const [user, setUser] = useState<User | boolean>(false)

  useEffect(() => {
    const session = supabase.auth.session()
    setSession(session)
    setUser(session?.user ?? false)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session)
        setUser(session?.user ?? false)
      }
    )

    return () => {
      authListener.unsubscribe()
    }
  }, [])

  const value = {
    session,
    user
  }
  return <UserContext.Provider value={value} {...props} />
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`)
  }
  return context
}

const AuthUser = () => {
  const { user } = useUser()
  return user
}

export default AuthUser
