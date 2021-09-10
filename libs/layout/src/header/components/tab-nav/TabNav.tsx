/* eslint-disable-next-line */
import { NavItem } from "@watheia/model"
import clsx from "clsx"

export type TabNavProps = {
  navigation: NavItem[]
}

export const TabNav = ({ navigation }: TabNavProps) => (
  <div className="ml-10 flex items-baseline space-x-4">
    {navigation.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className={clsx(
          item.current
            ? "bg-shark-700 text-shark-50 shadow-inner"
            : "text-shark-300 hover:bg-shark-700 hover:text-shark-50",
          "px-3 py-2 rounded-md text-sm font-medium"
        )}
        aria-current={item.current ? "page" : undefined}
      >
        {item.name}
      </a>
    ))}
  </div>
)

export default TabNav
