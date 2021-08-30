import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon } from "@heroicons/react/outline"
import { Facebook, Github, Twitter } from "@waweb/gfx"
import { ReactNode } from "react"

export interface NavigationZone {
  name: string
  href: string
  current?: boolean
  icon?: (props: any) => ReactNode | ReactNode[] | null
}

export const navigation = {
  basePath: "/",
  primary: [
    { name: "About", href: "/about", icon: HomeIcon, current: false },
    { name: "Solutions", href: "/solutions", icon: ChartBarIcon, current: false },
    { name: "News", href: "/news", icon: FolderIcon, current: false },
    { name: "Support", href: "/support", icon: CalendarIcon, current: false }
  ],
  solutions: [
    { name: "Strategic", href: "/strategic", current: false },
    { name: "Tactical", href: "/tactical", current: false }
  ],
  support: [
    { name: "Pricing", href: "/pricing", current: false },
    { name: "Documentation", href: "/docs", current: false },
    { name: "Guides", href: "/guides", current: false },
    { name: "API Status", href: "/health", current: false }
  ],
  company: [
    { name: "About", href: "/about", current: false },
    { name: "Blog", href: "/blog", current: false },
    { name: "Careers", href: "/careers", current: false },
    { name: "Press", href: "/press", current: false },
    { name: "Partners", href: "/partners", current: false }
  ],
  legal: [
    { name: "Privacy", href: "/privacy", current: false },
    { name: "Terms", href: "/terms", current: false }
  ],
  user: [
    { name: "Login", href: "/login", current: false },
    { name: "Logout", href: "/logout", current: false, private: true },
    { name: "Profile", href: "/profile", current: false, private: true }
  ],
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com/watheialabs.com",
      icon: Facebook
    },
    {
      name: "GitLab",
      href: "https://gitlab.com/watheia",
      icon: Twitter
    },
    {
      name: "GitHub",
      href: "https://github.com/watheia",
      icon: Github
    }
  ]
}

export type Sitemap = typeof navigation
