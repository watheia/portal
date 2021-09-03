/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from "react"
import { Transition } from "@headlessui/react"
import {
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  ViewGridIcon
} from "@heroicons/react/outline"
import clsx from "clsx"
import { Disclosure, Menu } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { WaCard } from "@waweb/gfx"

const MobileMenuBtn = ({ open }) => (
  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-aqua-500">
    <span className="sr-only">Open main menu</span>
    {open ? (
      <XIcon className="block h-6 w-6" aria-hidden="true" />
    ) : (
      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
    )}
  </Disclosure.Button>
)
const solutions = [
  {
    name: "Analytics",
    description: "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon
  }
]

const callsToAction = [
  { name: "Home", href: "/home/", icon: PlayIcon },
  { name: "Blog", href: "/blog/", icon: CheckCircleIcon },
  { name: "Sales", href: "/sales/", icon: PhoneIcon }
]

const Header = () => {
  return (
    <Disclosure as="nav" className="bg-shark-50 shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <MobileMenuBtn open={open} />
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden  sm:flex sm:space-x-8">
                  <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0  sm:space-x-3 sm:px-6 lg:px-8">
                    {callsToAction.map((item) => (
                      <div key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-gray-400 hidden sm:flex"
                            aria-hidden="true"
                          />
                          <span className="ml-1 whitespace-nowrap">{item.name}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-shark-50 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-shark-50 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-500">
                      <span className="sr-only">Open user menu</span>
                      <WaCard className="h-8 w-8" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-shark-50 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-aqua-50 border-aqua-500 text-aqua-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {callsToAction.map((item, i) => (
                <div key={item.name} className="flow-root">
                  <a
                    href={item.href}
                    className={clsx(
                      i === 0
                        ? "bg-aqua-50 border-aqua-500 text-aqua-700"
                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700",
                      "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

const StatusIndicator = () => (
  <span className="inline-flex items-center text-shark-50 bg-shark-900 rounded-full p-1 pr-2 sm:text-secondary lg:text-sm xl:text-secondary hover:text-shark-200">
    <span className="animate-pulse z-0 px-3 py-0.5 text-shark-50 text-xs font-semibold leading-5 uppercase tracking-wide bg-aqua-500 rounded-full">
      Connected
    </span>
    <span className="ml-4 text-sm">Realtime mode activated.</span>
  </span>
)

export default function Index(props) {
  return (
    <>
      <div className="relative bg-shark-900 overflow-hidden h-screen">
        <Header />
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 sm:mt-24">
            <div className="mx-auto max-w-7xl">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                  <div>
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-shark-50 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                      <span className="md:block">Watheia</span>{" "}
                      <span className="text-aqua-400 md:block">Gatekeeper</span>
                    </h1>
                    <p className="mt-3 text-secondary text-skark-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Please enjoy your stay.
                    </p>
                    <p className="mt-8 text-sm text-shark-50 uppercase tracking-wide font-semibold sm:mt-10">
                      Used by
                    </p>
                    <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                      <div className="flex flex-wrap items-start justify-between">
                        <div className="flex justify-center px-1">
                          <img
                            className="h-9 sm:h-10"
                            src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                            alt="Tuple"
                          />
                        </div>
                        <div className="flex justify-center px-1">
                          <img
                            className="h-9 sm:h-10"
                            src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                            alt="Workcation"
                          />
                        </div>
                        <div className="flex justify-center px-1">
                          <img
                            className="h-9 sm:h-10"
                            src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                            alt="StaticKit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                  <div className="bg-shark-50 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                    <div className="px-4 py-8 sm:px-10">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Authentication Request
                      </h3>
                      <div className="mt-6">
                        <form action="#" method="POST" className="space-y-6">
                          <div>
                            <label htmlFor="mobile-or-email" className="sr-only">
                              Mobile number or email
                            </label>
                            <input
                              type="text"
                              name="mobile-or-email"
                              id="mobile-or-email"
                              autoComplete="email"
                              placeholder="Mobile number or email"
                              required
                              className="block w-full shadow-sm focus:ring-aqua-500 focus:border-aqua-500 sm:text-sm border-shark-300 rounded-md"
                            />
                          </div>

                          <div>
                            <button
                              type="submit"
                              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-shark-50 bg-aqua-600 hover:bg-aqua-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-500"
                            >
                              Get portal link
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="px-4 py-6 bg-shark-50 border-t-2 border-shark-200 sm:px-10">
                      <p className="text-xs leading-5 text-shark-500">
                        Your privacy is important. Please see our{" "}
                        <a href="#" className="font-medium text-shark-900 hover:underline">
                          Terms &amp; Conditions
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
