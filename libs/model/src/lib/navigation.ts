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
  primary: [
    { name: "Company", href: "/company", icon: HomeIcon, current: false },
    { name: "Blog", href: "/blog", icon: ChartBarIcon, current: false },
    { name: "News", href: "/news", icon: FolderIcon, current: false },
    { name: "Support", href: "/support", icon: CalendarIcon, current: false }
  ],
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" }
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" }
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" }
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" }
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
