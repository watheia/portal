import { Navbar, NavigationContext } from "@watheia/navigator"
import { HtmlHTMLAttributes } from "react"
import { ActionsBar } from "../actions-bar"
import styles from "./Header.module.css"

export type HeaderProps = NavigationContext & HtmlHTMLAttributes<HTMLDivElement>

export function Header({ navigation, ...props }: HeaderProps) {
  return (
    <header className={styles.root} {...props}>
      <ActionsBar />
    </header>
  )
}

export default Header
