/* This example requires Tailwind CSS v2.0+ */
import { Corporate, Gatekeeper } from "@watheia/views"
import { useState, useEffect } from "react"
import { supabase } from "@watheia/supabase"
import { AuthSession } from "@supabase/supabase-js"
import { Profile } from "@watheia/model"

export default function Home() {
  const [session, setSession] = useState<AuthSession | null>(null)
  const [profiles, setProfiles] = useState<Profile[]>([])

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event: string, session: AuthSession | null) => {
      setSession(session)
    })
  }, [])

  useEffect(() => {
    getPublicProfiles()
  }, [])

  async function getPublicProfiles() {
    try {
      const { data, error } = await supabase
        .from<Profile>("profiles")
        .select("id, username, avatar_url, website, updated_at")
        .order("updated_at", { ascending: false })

      if (error || !data) {
        throw error || new Error("No data")
      }
      console.log("Public profiles:", data)
      setProfiles(data)
    } catch (error) {
      console.log("error", error.message)
    }
  }

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? <Gatekeeper /> : <Corporate />}
    </div>
  )
}
