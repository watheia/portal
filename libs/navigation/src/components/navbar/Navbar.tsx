import { Disclosure } from "@headlessui/react"
import Link from "next/link"
import clsx from "clsx"
import TabNav from "../tab-nav"
import PrincipalNav from "../principal-nav"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { HtmlHTMLAttributes } from "react"

import styles from "./Navbar.module.css"
import { useRouter } from "next/router"
import { NavigationContext, Route } from "../../util/types"
import { User } from "@supabase/supabase-js"
import { DEFAULT_AVATAR, DEFAULT_USER_NAME, isActiveRoute } from "../../util/helpers"

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
  activeRoute: string
  user?: User | null
} & NavigationContext &
  HtmlHTMLAttributes<HTMLDivElement>

const UserInfo = ({ user }: { user: User }) => (
  <div className="pt-4 pb-3 border-t border-shark-700">
    <div className="flex items-center px-5">
      <div className="flex-shrink-0">
        <img
          className="h-10 w-10 rounded-full"
          src={user?.user_metadata.image_url ?? DEFAULT_AVATAR}
          alt=""
        />
      </div>
      <div className="ml-3">
        <div className="text-base font-medium text-shark-50">
          {user?.user_metadata.name}
        </div>
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
  </div>
)

const UserMenu = ({ routes }: { routes: Route[] }) => (
  <div className="mt-3 px-2 space-y-1">
    {routes.map((r) => (
      <a
        key={r.name}
        href={r.href}
        className="block px-3 py-2 rounded-md text-secondary-2 font-medium hover:text-secondary hover:bg-shark-700"
      >
        {r.name}
      </a>
    ))}
  </div>
)
const MobileNav = ({ navigation, activeRoute, user, ...props }: MobileNavProps) => {
  return (
    <Disclosure.Panel className="md:hidden" {...props}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navigation.primary.map((r) => (
          <a
            key={r.name}
            href={r.href}
            className={clsx(
              isActiveRoute(r, activeRoute)
                ? "bg-shark-500 text-secondary shadow-inner"
                : "text-secondary-2 hover:bg-shark-600 hover:text-secondary",
              "block px-3 py-2 rounded-md text-sm font-medium"
            )}
            aria-current={isActiveRoute(r, activeRoute) ? "page" : undefined}
          >
            {r.name}
          </a>
        ))}
      </div>
      <div className="pt-4 pb-3 border-t border-shark-700">
        {user && <UserInfo user={user} />}
        {user && <UserMenu routes={navigation.user} />}
      </div>
    </Disclosure.Panel>
  )
}

export type NavbarProps = NavigationContext & HtmlHTMLAttributes<HTMLDivElement>

export const Navbar = ({ navigation, className, ...props }: NavbarProps) => {
  const router = useRouter()
  const activeRoute = router?.asPath ?? "/"

  return (
    <Disclosure as="nav" className={clsx(styles.root, className)} {...props}>
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
                  <TabNav routes={navigation.primary} activeRoute={activeRoute} />
                </div>
              </div>
              {/* <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button type="button" className={styles.notifications}>
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <UserNav userNavigation={userNavigation} user={user} />
                </div>
              </div> */}
              <div className="-mr-2 flex md:hidden">
                <MobileMenuButton isOpen={open} />
              </div>
            </div>
          </div>
          <MobileNav navigation={navigation} activeRoute={activeRoute} />
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
