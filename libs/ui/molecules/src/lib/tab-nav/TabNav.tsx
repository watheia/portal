import clsx from "clsx"
import { HtmlHTMLAttributes } from "react"
import Link from "next/link"
import { isActiveRoute } from "../../isActiveRoute"
import { Route } from "../../types"
import styles from "./TabNav.module.css"

export type TabNavProps = {
  routes: Route[]
  activeRoute: string
} & HtmlHTMLAttributes<HTMLDivElement>

export function TabNav({ routes, activeRoute, className, ...props }: TabNavProps) {
  return (
    <div className={styles.root} {...props}>
      {routes.map((r) => (
        <Link key={r.name} href={r.href}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className={clsx(
              isActiveRoute(r, activeRoute)
                ? "bg-shark-500 text-white shadow-inner underline shadow-inset"
                : "text-shark-300 hover:bg-shark-600 hover:text-secondary",
              "px-3 py-2 rounded-md text-sm font-medium tracking-wider"
            )}
          >
            {r.name}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default TabNav
