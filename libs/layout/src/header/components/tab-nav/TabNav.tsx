/* eslint-disable-next-line */
import { NavItem } from "@watheia/model"
import { isActiveRoute } from "@watheia/util.helpers"
import clsx from "clsx"
import { useRouter } from "next/router"

import styles from "./TabNav.module.css"

type Tab = (item: NavItem) => JSX.Element

const withTab = (activeRoute: string): Tab => {
  return (item: NavItem) => {
    const isActive = isActiveRoute(item, activeRoute)
    return (
      <a
        key={item.name}
        href={item.href}
        className={clsx(
          isActive
            ? "bg-shark-500 text-secondary shadow-inner"
            : "text-secondary-2 hover:bg-shark-700 hover:text-secondary",
          "px-3 py-2 rounded-md text-sm font-medium"
        )}
        aria-current={isActive ? "page" : undefined}
      >
        {item.name}
      </a>
    )
  }
}
export type TabNavProps = {
  navigation: NavItem[]
}

export const TabNav = ({ navigation }: TabNavProps) => {
  const router = useRouter()
  const activeRoute = router?.asPath ?? "/"
  return <div className={styles.root}>{navigation.map(withTab(activeRoute))}</div>
}

export default TabNav
