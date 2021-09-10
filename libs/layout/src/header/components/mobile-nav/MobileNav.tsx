import { Disclosure } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { NavItem, User } from "@watheia/model"
import clsx from "clsx"

const MobileMenuButton = ({ isOpen }: { isOpen?: boolean }) => (
  <Disclosure.Button className="bg-shark-700 inline-flex items-center justify-center p-2 rounded-md text-shark-400 hover:text-shark-50 hover:bg-shark-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-shark-800 focus:ring-white">
    <span className="sr-only">Open main menu</span>
    {isOpen ? (
      <XIcon className="block h-6 w-6" aria-hidden="true" />
    ) : (
      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
    )}
  </Disclosure.Button>
)

export type MobileNavProps = {
  navigation: NavItem[]
  userNavigation: NavItem[]
  user: User
}

export const MobileNav = ({
  navigation,
  userNavigation,
  user,
  ...props
}: MobileNavProps) => (
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
)

export default MobileNav
