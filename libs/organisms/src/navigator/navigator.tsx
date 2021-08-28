import { Fragment, HTMLAttributes } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { Watheia, WatheiaAlt } from "@waweb/gfx"
import { NavigationZone } from "@waweb/model"
import { Link } from "@waweb/atoms"
import clsx from "clsx"
import "./navigator.module.css"

/* eslint-disable-next-line */
export type NavigatorProps = {
  navigation?: NavigationZone[]
} & HTMLAttributes<HTMLDivElement>

export const Navigator = ({ navigation, className, ...props }: NavigatorProps) => (
  <Popover className={clsx("relative", className)} {...props}>
    <div className="bg-shark-900 pt-6">
      <nav
        className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <span className="sr-only">Watheia</span>
              <WatheiaAlt className="h-10 w-auto sm:h-12" />
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="bg-shark-50 rounded-md p-2 inline-flex items-center justify-center text-shark-400 hover:bg-shark-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-primary">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="hidden space-x-8 md:flex md:ml-10">
            {navigation &&
              navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-light text-shark-100 hover:text-white hover:font-medium hover:underline"
                >
                  {item.name}
                </a>
              ))}
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link
            href="/user/login"
            className="font-medium text-secondary-2 hover:text-secondary"
          >
            Log in
          </Link>
        </div>
      </nav>
    </div>

    <Transition
      as={Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <Watheia className="h-8 w-auto" />
            </div>
            <div className="-mr-2">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-shark-400 hover:bg-shark-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-aqua-600">
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="pt-5 pb-6">
            <div className="px-2 space-y-1">
              {navigation &&
                navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-shark-900 hover:bg-shark-100"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
            <div className="mt-6 px-5">
              <p className="text-center text-base font-medium text-shark-500">
                Existing customer?{" "}
                <Link href="/user/login" className="text-shark-900 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
)

export default Navigator
