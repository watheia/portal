import { Popover, Transition } from "@headlessui/react"
import { callsToAction, solutions } from "../data"
import clsx from "clsx"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { Fragment } from "react"

export const PrimaryNav = () => (
  <Popover>
    {({ open }) => (
      <>
        <Popover.Button
          className={clsx(
            open ? "text-shark-900" : "text-shark-500",
            "group bg-shark-50 rounded-md inline-flex items-center text-base font-medium hover:text-shark-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-500"
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

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-shark-50">
            <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
              {solutions.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-shark-50"
                >
                  <div className="flex md:h-full lg:flex-col">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-aqua-500 text-white sm:h-12 sm:w-12">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                      <div>
                        <p className="text-base font-medium text-shark-900">{item.name}</p>
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
            <div className="bg-shark-50">
              <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                {callsToAction.map((item) => (
                  <div key={item.name} className="flow-root">
                    <a
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-shark-900 hover:bg-shark-100"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-shark-400"
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

export default PrimaryNav
