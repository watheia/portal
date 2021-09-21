import { corporate, resources } from "../data"

export const Nav = () => (
  <nav className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
    <div>
      <h3 className="text-sm font-medium tracking-wide text-primary-2 uppercase">
        Corporate
      </h3>
      <ul className="mt-5 space-y-6">
        {corporate.map((item) => (
          <li key={item.name} className="flow-root">
            <a
              href={item.href}
              className="-m-3 p-3 flex items-center rounded-md font-medium text-primary hover:bg-shark-50"
            >
              <item.icon
                className="flex-shrink-0 h-6 w-6 text-shark-400"
                aria-hidden="true"
              />
              <span className="ml-4">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h3 className="text-sm font-medium tracking-wide text-primary-2 uppercase">
        Resources
      </h3>
      <ul className="mt-5 space-y-6">
        {resources.map((item) => (
          <li key={item.name} className="flow-root">
            <a
              href={item.href}
              className="-m-3 p-3 flex items-center rounded-md font-medium text-primary hover:bg-shark-50"
            >
              <item.icon
                className="flex-shrink-0 h-6 w-6 text-shark-400"
                aria-hidden="true"
              />
              <span className="ml-4">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
)
