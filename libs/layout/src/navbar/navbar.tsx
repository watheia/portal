import Link from "next/link"
import s from "./navbar.module.css"

import { Logo } from "@waweb/gfx"
// import { useUser } from "@waweb/utils"

const Navbar = () => {
  // const { user, signOut } = useUser()

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-between align-center flex-row py-2 md:py-3 relative">
          <div className="flex flex-1 items-center">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo width={64} height={64} />
              </a>
            </Link>
          </div>

          <div className="flex flex-1 justify-end space-x-8 align-center">
            <nav className="space-x-2 ml-6">
              <Link href="/about">
                <a className={s.link}>About</a>
              </Link>
              <Link href="/blog">
                <a className={s.link}>News</a>
              </Link>
              <Link href="/support">
                <a className={s.link}>Support</a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
