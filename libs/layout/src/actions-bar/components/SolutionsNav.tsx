import { Popover } from "@headlessui/react"
import { callsToAction, solutions } from "../data"
import { Link } from "@watheia/atoms"

export const SolutionsNav = () => (
  <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
    <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
      {solutions.map((item) => (
        <Link
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
                <p className="font-medium text-primary">{item.name}</p>
                <p className="mt-1 text-sm text-primary-2">{item.description}</p>
              </div>
              <p className="mt-2 text-sm font-medium text-aqua-600 lg:mt-4">
                Learn more <span aria-hidden="true">&rarr;</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    <div className="bg-shark-50">
      <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
        {callsToAction.map((item) => (
          <div key={item.name} className="flow-root">
            <Link
              href={item.href}
              className="-m-3 p-3 flex items-center rounded-md font-medium text-primary hover:bg-shark-100"
            >
              <item.icon
                className="flex-shrink-0 h-6 w-6 text-shark-400"
                aria-hidden="true"
              />
              <span className="ml-3">{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </Popover.Panel>
)

export default SolutionsNav
