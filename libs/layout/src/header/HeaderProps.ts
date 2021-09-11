import { Route, User } from "@watheia/model"
import { HtmlHTMLAttributes } from "react"

export type HeaderProps = {
  userNavigation: Route[]
  navigation: Route[]
  user: User
} & HtmlHTMLAttributes<HTMLDivElement>
