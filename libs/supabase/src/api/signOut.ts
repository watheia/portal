import { supabase } from ".."

export default async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) console.log("Error logging out:", error.message)
}
