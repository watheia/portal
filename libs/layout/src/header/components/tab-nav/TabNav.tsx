/* eslint-disable-next-line */
import { NavItem } from "@watheia/model"
import clsx from "clsx"
import { useRouter } from "next/router"

export type TabNavProps = {
  navigation: NavItem[]
}

export const TabNav = ({ navigation }: TabNavProps) => {
  const router = useRouter()
  const activeRoute = router?.asPath ?? "/"
  return (
    <div className="ml-10 flex items-baseline space-x-4">
      {navigation.map((item) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          key={item.name}
          href={activeRoute.startsWith(item.href) ? "#" : item.href}
          className={clsx(
            activeRoute.startsWith(item.href)
              ? "bg-shark-500 text-secondary shadow-inner"
              : "text-secondary-2 hover:bg-shark-700 hover:text-secondary",
            "px-3 py-2 rounded-md text-sm font-medium"
          )}
          aria-current={activeRoute.startsWith(item.href) ? "page" : undefined}
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}

export default TabNav
