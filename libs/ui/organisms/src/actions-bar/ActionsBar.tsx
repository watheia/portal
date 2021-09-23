/* This example requires Tailwind CSS v2.0+ */
import { Fragment, HtmlHTMLAttributes } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { solutions } from "@watheia/catalog"

import clsx from "clsx"
import { Logo } from "@watheia/app.ui.gfx"
import { Link } from "@watheia/app.ui.atoms"

import styles from "./ActionsBar.module.css"
import PrimaryNav from "./components/PrimaryNav"
import SecondaryNav from "./components/SecondaryNav"
import { NavLink } from "@watheia/app.ui.atoms"

const CloseButton = () => (
  <Popover.Button className="bg-shark-50 rounded-md p-2 inline-flex items-center justify-center text-shark-400 hover:text-shark-500 hover:bg-shark-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-aqua-500">
    <span className="sr-only">Close menu</span>
    <XIcon className="h-6 w-6" aria-hidden="true" />
  </Popover.Button>
)

const MenuButton = () => (
  <Popover.Button className="bg-shark-50 rounded-md p-2 inline-flex items-center justify-center text-shark-400 hover:text-shark-500 hover:bg-shark-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-aqua-500">
    <span className="sr-only">Open menu</span>
    <MenuIcon className="h-6 w-6" aria-hidden="true" />
  </Popover.Button>
)

// const NavLink = ({ to, children }) => {}

export type ActionsBarProps = HtmlHTMLAttributes<HTMLDivElement>

export const ActionsBar = ({ className, ...props }: ActionsBarProps) => {
  return (
    <Popover className={clsx(styles.actionBar, className)} {...props}>
      <div
        className="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <Logo href="/" variant="secondary" />
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <MenuButton />
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <PrimaryNav />
              <NavLink href="/portfolio">Portfolio</NavLink>
              <NavLink href="/docs">Docs</NavLink>
              <SecondaryNav />
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <NavLink href="/auth">Sign in</NavLink>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-shark-50 divide-y-2 divide-shark-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <Logo variant="primary" />
                <div className="-mr-2">
                  <CloseButton />
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center p-3 rounded-lg hover:bg-shark-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-aqua-500 text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-shark-900">
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-8 text-base">
                    <Link
                      href="/solutions/                                                                                                     "
                      className="font-medium text-aqua-600 hover:text-aqua-500"
                    >
                      {" "}
                      View all solutions <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/corporate/"
                  className="rounded-md text-base font-medium text-shark-900 hover:text-shark-700"
                >
                  Corporate
                </Link>

                <Link
                  href="/portfolio/"
                  className="rounded-md text-base font-medium text-shark-900 hover:text-shark-700"
                >
                  Portfolio
                </Link>

                <Link
                  href="/docs/"
                  className="rounded-md text-base font-medium text-shark-900 hover:text-shark-700"
                >
                  Docs
                </Link>

                <Link
                  href="/resources/"
                  className="rounded-md text-base font-medium text-shark-900 hover:text-shark-700"
                >
                  Resources
                </Link>

                <Link
                  href="/blog/"
                  className="rounded-md text-base font-medium text-shark-900 hover:text-shark-700"
                >
                  Blog
                </Link>

                <Link
                  href="/contact/"
                  className="rounded-md text-base font-medium text-shark-900 hover:text-shark-700"
                >
                  Contact Sales
                </Link>
              </div>
              <div className="mt-6">
                <p className="mt-6 text-center text-base font-medium text-shark-500">
                  Existing client?{" "}
                  <a href="/auth" className="text-aqua-600 hover:text-aqua-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default ActionsBar
