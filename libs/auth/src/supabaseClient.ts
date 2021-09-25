import { createClient } from "@supabase/supabase-js"
import { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY } from "@watheia/catalog"

if (!NEXT_PUBLIC_SUPABASE_URL) {
  throw Error("Missing env.NEXT_PUBLIC_SUPABASE_URL")
} else if (!NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw Error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY")
}

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default supabase
