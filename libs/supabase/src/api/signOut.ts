import { supabase } from "../supabase"

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.error("Error logging out:", error.message)
}
