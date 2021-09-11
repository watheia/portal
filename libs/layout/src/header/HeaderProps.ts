import { NavItem, User } from "@watheia/model"
import { HtmlHTMLAttributes } from "react"

export type HeaderProps = {
  userNavigation: NavItem[]
  navigation: NavItem[]
  user: User
} & HtmlHTMLAttributes<HTMLDivElement>
