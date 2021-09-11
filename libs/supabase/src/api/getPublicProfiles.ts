import { Profile } from "@watheia/model"
import supabase from "../supabaseClient"

export default async function getPublicProfiles(): Promise<Profile[]> {
  try {
    if (!supabase) throw new Error("supabase uninitialized")

    const { data, error } = await supabase
      .from<Profile>("profiles")
      .select("id, username, avatar_url, website, updated_at")
      .order("updated_at", { ascending: false })

    if (error || !data) {
      throw error || new Error("No data")
    }

    return data
  } catch (error) {
    if (error instanceof Error) console.error("error", error.message)
  }

  return []
}
