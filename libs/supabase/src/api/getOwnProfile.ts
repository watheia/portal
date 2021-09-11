import { Profile } from "@watheia/model"
import { supabase } from ".."

export default async function getOwnProfile(): Promise<Profile> {
  try {
    const user = supabase.auth.user()

    const { data, error } = await supabase
      .from("profiles")
      .select(`username, website, avatar_url`)
      .eq("id", user?.id)
      .single()

    if (error || !data) {
      throw error || new Error("Data is missing")
    }

    return data
  } catch (error) {
    console.log("error", error)
    throw error
  }
}
