import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon } from "@heroicons/react/outline"
import { ReactNode } from "react"

export interface NavigationZone {
  name: string
  href: string
  current?: boolean
  icon?: (props: any) => ReactNode | ReactNode[] | null
}

export const navigation = [
  { name: "Company", href: "/company", icon: HomeIcon, current: false },
  { name: "Blog", href: "/blog", icon: ChartBarIcon, current: false },
  { name: "News", href: "/news", icon: FolderIcon, current: false },
  { name: "Support", href: "/support", icon: CalendarIcon, current: false }
]
