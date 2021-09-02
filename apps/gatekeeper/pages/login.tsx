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
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
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
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "View All Products", href: "#", icon: CheckCircleIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon }
]

const Header = () => (
  <Popover className="z-0 relative">
    {({ open }) => (
      <>
        <div className="relative z-10 bg-shark-900 shadow">
          <div className="max-w-7xl mx-auto flex px-4 py-6 sm:px-6 lg:px-8">
            <Popover.Button
              className={clsx(
                open ? "text-shark-50" : "text-shark-200",
                "group rounded-md inline-flex items-center font-medium hover:text-shark-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-500"
              )}
            >
              <span>Solutions</span>
              <ChevronDownIcon
                className={clsx(
                  open ? "text-shark-600" : "text-shark-400",
                  "ml-2 h-5 w-5 group-hover:text-shark-500"
                )}
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <Popover.Panel className="absolute z-20 inset-x-0 transform shadow-lg">
            <div className="bg-white">
              <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-shark-50 transition ease-in-out duration-150"
                  >
                    <div className="flex md:h-full lg:flex-col">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-aqua-500 text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                        <div>
                          <p className="text-base font-medium text-shark-900">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm text-shark-500">{item.description}</p>
                        </div>
                        <p className="mt-2 text-sm font-medium text-aqua-600 lg:mt-4">
                          Learn more <span aria-hidden="true">&rarr;</span>
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-shark-50">
              <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                {callsToAction.map((item) => (
                  <div key={item.name} className="flow-root">
                    <a
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">{item.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
)

export default function Example() {
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
                    <span className="inline-flex items-center text-shark-50 bg-shark-900 rounded-full p-1 pr-2 sm:text-secondary lg:text-sm xl:text-secondary hover:text-shark-200">
                      <span className="animate-pulse z-0 px-3 py-0.5 text-shark-50 text-xs font-semibold leading-5 uppercase tracking-wide bg-aqua-500 rounded-full">
                        Connected
                      </span>
                      <span className="ml-4 text-sm">Realtime mode activated.</span>
                    </span>
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
