import { Disclosure } from "@headlessui/react"
import { HeaderProps } from "../../HeaderProps"
import Link from "next/link"
import clsx from "clsx"
import { TabNav } from "../tab-nav"
import MobileMenuButton from "./MobileMenuButton"
import UserNav from "../user-nav"
import { BellIcon } from "@heroicons/react/outline"
import MobileNav from "../mobile-nav"

export type NavigatorProps = HeaderProps

export const Navigator = ({
  userNavigation,
  navigation,
  className,
  user,
  ...props
}: NavigatorProps) => (
  <Disclosure as="nav" className={clsx("bg-shark-900", className)} {...props}>
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/home" passHref>
                  <a href="/home">
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
                <UserNav userNavigation={userNavigation} user={user} />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <MobileMenuButton isOpen={open} />
            </div>
          </div>
        </div>
        <MobileNav navigation={navigation} userNavigation={userNavigation} user={user} />
      </>
    )}
  </Disclosure>
)

export default Navigator
