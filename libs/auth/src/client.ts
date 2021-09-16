import { createClient } from "@supabase/supabase-js"
import { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY } from "@watheia/model"

let supabase

if (!NEXT_PUBLIC_SUPABASE_URL) {
  console.error("Missing env.NEXT_PUBLIC_SUPABASE_URL")
} else if (!NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY")
} else {
  supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)
}

export default supabase
