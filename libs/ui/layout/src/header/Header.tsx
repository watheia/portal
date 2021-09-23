import { NavigationContext } from "@watheia/catalog"
import { HtmlHTMLAttributes } from "react"
import { ActionsBar } from "@watheia/app.ui.organisms"
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
