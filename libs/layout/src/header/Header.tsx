import { Navbar, NavigationContext } from "@watheia/navigation"
import { HtmlHTMLAttributes } from "markdown-to-jsx/node_modules/@types/react"
import styles from "./Header.module.css"

/* eslint-disable-next-line */
export type HeaderProps = NavigationContext & HtmlHTMLAttributes<HTMLDivElement>

export function Header({ navigation, ...props }: HeaderProps) {
  return (
    <header className={styles.root} {...props}>
      <Navbar navigation={navigation} />
    </header>
  )
}

export default Header
