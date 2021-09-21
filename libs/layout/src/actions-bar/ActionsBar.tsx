/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon } from "@heroicons/react/outline"
import clsx from "clsx"
import { Fragment, HtmlHTMLAttributes } from "react"
import { MobileNavPanel } from "./components/MobileNav"
import { Link } from "@watheia/atoms"
import { FlyoutMenu } from "@watheia/molecules"
import { Logo } from "@watheia/gfx"
import SolutionsNav from "./components/SolutionsNav"
import MoreNav from "./components/MoreNav"

export type ActionsBarProps = HtmlHTMLAttributes<HTMLDivElement>

export const ActionsBar = ({ className, ...props }: ActionsBarProps) => {
  return (
    <Popover className={clsx("relative bg-white", className)} {...props}>
      <div
        className="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <Logo />
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-shark-400 hover:text-primary-2 hover:bg-shark-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-aqua-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <FlyoutMenu prompt="Solutions">
                <SolutionsNav />
              </FlyoutMenu>
              <Link
                href="/case-studies"
                className="font-medium text-primary-2 hover:text-primary"
              >
                Case Studies
              </Link>
              <Link href="/docs" className="font-medium text-primary-2 hover:text-primary">
                Docs
              </Link>
              <FlyoutMenu prompt="More">
                <MoreNav />
              </FlyoutMenu>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <Link href="/auth" className="font-medium text-primary-2 hover:text-primary">
                Sign in
              </Link>
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
        <MobileNavPanel />
      </Transition>
    </Popover>
  )
}

export default ActionsBar
