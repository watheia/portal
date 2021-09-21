import { Popover } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
import { Logo } from "@watheia/gfx"
import { solutions } from "../data"
import { Link } from "@watheia/atoms"

export const MobileNavPanel = () => (
  <Popover.Panel
    focus
    className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
  >
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-shark-50">
      <div className="pt-5 pb-6 px-5 sm:pb-8">
        <div className="flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <div className="-mr-2">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-shark-400 hover:text-shark-500 hover:bg-shark-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-aqua-500">
              <span className="sr-only">Close menu</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
        <div className="mt-6 sm:mt-8">
          <nav>
            <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
              {solutions.map((item) => (
                <Link
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
                </Link>
              ))}
            </div>
            <div className="mt-8 text-base">
              <Link
                href="/corporate/solutions"
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
            href="/corporate"
            className="rounded-md text-base font-medium text-shark-900 hover:text-shark-700"
          >
            Corporate
          </Link>
          <Link
            href="/potfolio"
            className="rounded-md text-base font-medium text-shark-900 hover:text-shark-700"
          >
            Portfolio
          </Link>
          <Link
            href="/docs"
            className="rounded-md text-base font-medium text-shark-900 hover:text-shark-700"
          >
            Docs
          </Link>
          <Link
            href="/resources"
            className="rounded-md text-base font-medium text-shark-900 hover:text-shark-700"
          >
            Resources
          </Link>

          <Link
            href="/blog"
            className="rounded-md text-base font-medium text-shark-900 hover:text-shark-700"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="rounded-md text-base font-medium text-shark-900 hover:text-shark-700"
          >
            Contact Sales
          </Link>
        </div>
        <div className="mt-6">
          <p className="mt-6 text-center text-base font-medium text-shark-500">
            Existing client?{" "}
            <Link href="/auth" className="text-aqua-600 hover:text-aqua-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  </Popover.Panel>
)

export default MobileNavPanel
