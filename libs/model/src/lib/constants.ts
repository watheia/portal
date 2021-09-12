export const BLOG_URL = process.env.BLOG_URL || "http://localhost:4300"
export const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
export const NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const PRIMARY_COLOR = "#04BFBF"
export const BLACK = "#1a1718"
export const WHITE = "#fefeff"

export const DEFAULT_AVATARS_BUCKET = "avatars"

export const SITE_URL = "https://watheia.app"
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin
export const TWITTER_USER_NAME = "watheia"
export const BRAND_NAME = "Watheia"
export const SITE_NAME_MULTILINE = ["Watheia", "Corporate"]
export const SITE_NAME = "Corporate"
export const META_DESCRIPTION =
  "This is an open source demo that Next.js developers can clone, deploy, and fully customize for events. Created through collaboration of marketers, designers, and developers at Vercel."
export const SITE_DESCRIPTION =
  "An interactive online experience by the community, free for everyone."
export const DATE = "October 27, 2020"
export const SHORT_DATE = "Oct 1 - 9:00am PST"
export const FULL_DATE = "Oct 1st 9am Pacific Time (GMT-7)"
export const TWEET_TEXT = META_DESCRIPTION
export const COOKIE = "user-id"

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = "/terms-and-conditions"
export const COPYRIGHT_HOLDER = "Watheia Labs, LLC."

export const REPO = "https://github.com/watheia/waweb"
export const SEED_TICKET_NUMBER = 1234

export const MISSION_STATEMENT = "Our mission is to create more humanistic technology."

export const DEFAULT_TITLE = "Watheia Corporate"
