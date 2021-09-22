import { Popover, Transition } from "@headlessui/react"
import { blogPosts, corporate, resources } from "../data"
import { Link } from "@watheia/atoms"
import clsx from "clsx"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { Fragment } from "react"

const SecondaryNav = () => (
  <Popover>
    {({ open }) => (
      <>
        <Popover.Button
          className={clsx(
            open ? "text-shark-900" : "text-shark-500",
            "group bg-shark-50 rounded-md inline-flex items-center text-base font-medium hover:text-shark-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-500"
          )}
        >
          <span>More</span>
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
          <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
            <div className="absolute inset-0 flex">
              <div className="bg-shark-50 w-1/2" />
              <div className="bg-shark-50 w-1/2" />
            </div>
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
              <nav className="grid gap-y-10 px-4 py-8 bg-shark-50 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                <div>
                  <h3 className="text-sm font-medium tracking-wide text-shark-500 uppercase">
                    Company
                  </h3>
                  <ul className="mt-5 space-y-6">
                    {corporate.map((item) => (
                      <li key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-shark-900 hover:bg-shark-50"
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
                  <h3 className="text-sm font-medium tracking-wide text-shark-500 uppercase">
                    Resources
                  </h3>
                  <ul className="mt-5 space-y-6">
                    {resources.map((item) => (
                      <li key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-shark-900 hover:bg-shark-50"
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
              <div className="bg-shark-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                <div>
                  <h3 className="text-sm font-medium tracking-wide text-shark-500 uppercase">
                    From the blog
                  </h3>
                  <ul className="mt-6 space-y-6">
                    {blogPosts.map((post) => (
                      <li key={post.id} className="flow-root">
                        <a
                          href={post.href}
                          className="-m-3 p-3 flex rounded-lg hover:bg-shark-100"
                        >
                          <div className="hidden sm:block flex-shrink-0">
                            <img
                              className="w-32 h-20 object-cover rounded-md"
                              src={post.imageUrl}
                              alt=""
                            />
                          </div>
                          <div className="w-0 flex-1 sm:ml-8">
                            <h4 className="text-base font-medium text-shark-900 truncate">
                              {post.name}
                            </h4>
                            <p className="mt-1 text-sm text-shark-500">{post.preview}</p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 text-sm font-medium">
                  <Link href="/blog/" className="text-aqua-600 hover:text-aqua-500">
                    {" "}
                    View all posts <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
)

export default SecondaryNav
