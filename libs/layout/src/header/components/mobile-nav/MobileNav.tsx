import { Disclosure } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { DivProps, NavItem, User } from "@watheia/model"
import { isActiveRoute } from "@watheia/util.helpers"
import clsx from "clsx"
import { useRouter } from "next/router"

import styles from "./MobileNav.module.css"

export type MobileNavProps = {
  navigation: NavItem[]
  userNavigation: NavItem[]
  user: User
} & DivProps

// const linkStyles = {
//   [styles.navLink]: true
// }

export const MobileNav = ({
  navigation,
  userNavigation,
  user,
  ...props
}: MobileNavProps) => {
  const router = useRouter()
  const activeRoute = router?.asPath ?? "/home"
  return (
    <Disclosure.Panel className="md:hidden" {...props}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={clsx(
              isActiveRoute(item, activeRoute)
                ? "bg-shark-700 text-secondary shadow-inner"
                : "text-secondary-2 hover:bg-shark-500 hover:text-secondary",
              "block px-3 py-2 rounded-md font-medium"
            )}
            aria-current={isActiveRoute(item, activeRoute) ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="pt-4 pb-3 border-t border-shark-700">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-shark-50">{user.name}</div>
            {user.email && (
              <div className="text-sm font-medium text-shark-400">{user.email}</div>
            )}
          </div>
          <button
            type="button"
            className="ml-auto bg-shark-800 flex-shrink-0 p-1 rounded-full text-shark-400 hover:text-shark-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-shark-800 focus:ring-white"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 px-2 space-y-1">
          {userNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-secondary-2 font-medium hover:text-secondary hover:bg-shark-700"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </Disclosure.Panel>
  )
}

export default MobileNav
