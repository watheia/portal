import s from "./navbar.module.css"
import clsx from "clsx"

import { Logo } from "@waweb/gfx"
import { Link } from "@waweb/atoms"
// import { useUser } from "@waweb/utils"
/* This example requires Tailwind CSS v2.0+ */
const tabs = [
  { name: "About", href: "/about", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Support", href: "/support", current: false }
]
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
            <Link className={s.logo} aria-label="Logo" href="/">
              <Logo className="h-12" />
            </Link>
          </div>

          <div className="flex flex-1 justify-end align-center align-middle">
            <nav className="flex space-x-4 md:space-x-6 ">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  href={tab.href}
                  // className={clsx(
                  //   tab.current
                  //     ? "border-shark-50 text-shark-50"
                  //     : "border-transparent text-shark-200 hover:text-shark-50 hover:border-shark-50",
                  //   "whitespace-nowrap px-1 border-b-2 font-medium text-md"
                  // )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
