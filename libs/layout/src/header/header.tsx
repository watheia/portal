import { NavItem } from "@watheia/model"
import { Fragment, HtmlHTMLAttributes } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import clsx from "clsx"
import { user } from "@watheia/model"
import Link from "next/link"
import WatheiaAlt from "@waweb/assets.images/watheia-alt.svg"

import "./header.module.css"

const MobileMenuButton = ({ isOpen }: { isOpen?: boolean }) => (
  <Disclosure.Button className="bg-shark-800 inline-flex items-center justify-center p-2 rounded-md text-shark-400 hover:text-shark-50 hover:bg-shark-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-shark-800 focus:ring-white">
    <span className="sr-only">Open main menu</span>
    {isOpen ? (
      <XIcon className="block h-6 w-6" aria-hidden="true" />
    ) : (
      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
    )}
  </Disclosure.Button>
)

const TabNav = ({ navigation }: { navigation: NavItem[] }) => (
  <div className="ml-10 flex items-baseline space-x-4">
    {navigation.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className={clsx(
          item.current
            ? "bg-shark-700 text-shark-50"
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

const ProfileDropdown = ({ userNavigation }: { userNavigation: NavItem[] }) => (
  <Menu as="div" className="ml-3 relative">
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
          <Menu.Item key={item.name}>
            {({ active }) => (
              <a
                href={item.href}
                className={clsx(
                  active ? "bg-shark-100" : "",
                  "block px-4 py-2 text-sm text-shark-200"
                )}
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

const Navigator = ({ userNavigation, navigation, className, ...props }: HeaderProps) => (
  <Disclosure as="nav" className={clsx("bg-shark-900", className)} {...props}>
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" passHref>
                  <a href="/">
                    <img
                      className="h-8 w-8"
                      src="https://cdn.watheia.org/assets/watheia-alt.svg"
                      alt="Watheia"
                    />
                  </a>
                </Link>
              </div>
              <div className="hidden md:block">
                <TabNav navigation={navigation} />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="bg-shark-800 p-1 rounded-full text-shark-400 hover:text-shark-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-shark-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <ProfileDropdown userNavigation={userNavigation} />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <MobileMenuButton isOpen={open} />
            </div>
          </div>
        </div>

        <Disclosure.Panel className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={clsx(
                  item.current
                    ? "bg-shark-200 text-shark-900"
                    : "text-shark-900 hover:bg-shark-300 hover:text-shark-50",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
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
                <div className="text-sm font-medium text-shark-400">{user.email}</div>
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
                  className="block px-3 py-2 rounded-md text-base font-medium text-shark-400 hover:text-shark-50 hover:bg-shark-700"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
)

export type HeaderProps = {
  userNavigation: NavItem[]
  navigation: NavItem[]
} & HtmlHTMLAttributes<HTMLDivElement>

export const Header = ({
  className,
  userNavigation,
  navigation,
  ...props
}: HeaderProps) => {
  return (
    <div className={clsx("border-b-2 border-black drop-shadow-md", className)} {...props}>
      <Navigator userNavigation={userNavigation} navigation={navigation} />
    </div>
  )
}

export default Header
