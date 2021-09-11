import { Menu, Transition } from "@headlessui/react"
import { DivProps, NavItem, User } from "@watheia/model"
import { Fragment } from "react"
import clsx from "clsx"
import { useRouter } from "next/router"

import styles from "./UserNav.module.css"

/* eslint-disable-next-line */
export type UserNavProps = {
  userNavigation: NavItem[]
  user: User
} & DivProps

export const UserNav = ({ userNavigation, user, ...props }: UserNavProps) => {
  const router = useRouter()
  const activeRoute = router?.asPath ?? "/"
  return (
    <Menu as="div" className="ml-3 relative" {...props}>
      <div>
        <Menu.Button className="max-w-xs bg-shark-800 rounded-full flex items-center text-sm text-shark-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-shark-800 focus:ring-white">
          <span className="sr-only">Open user menu</span>
          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-shark-50 ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userNavigation.map((item) => (
            <Menu.Item key={item.name} disabled={item.d}>
              {({ active }) => (
                <a
                  href={item.href}
                  className={clsx({
                    [styles.navLink]: true, //always applies
                    [styles.active]: activeRoute.startsWith(item.href), //only when active page
                    [styles.disabled]: item.disabled
                  })}
                >
                  {item.name}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default UserNav
