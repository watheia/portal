/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"
import clsx from "clsx"
import { Fragment, HtmlHTMLAttributes } from "react"
import Link from "next/link"
import { blogPosts, callsToAction, corporate, resources, solutions } from "./data"

export type ActionsBarProps = HtmlHTMLAttributes<HTMLDivElement>

const Logo = () => (
  <Link href="/" passHref>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className="flex">
      <span className="sr-only">Home</span>
      <img
        className="h-8 w-auto sm:h-10"
        src="https://cdn.watheia.org/assets/watheia.svg"
        alt="Watheia"
      />
    </a>
  </Link>
)


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
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-shark-400 hover:text-shark-500 hover:bg-shark-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-aqua-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={clsx(
                        open ? "text-shark-900" : "text-shark-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-shark-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-500"
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
                      <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
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
                                    <p className="text-base font-medium text-shark-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-shark-500">
                                      {item.description}
                                    </p>
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
              <a
                href="#"
                className="text-base font-medium text-shark-500 hover:text-shark-900"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base font-medium text-shark-500 hover:text-shark-900"
              >
                Docs
              </a>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={clsx(
                        open ? "text-shark-900" : "text-shark-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-shark-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-500"
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
                          <div className="bg-white w-1/2" />
                          <div className="bg-shark-50 w-1/2" />
                        </div>
                        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                          <nav className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
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
                                        <p className="mt-1 text-sm text-shark-500">
                                          {post.preview}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-6 text-sm font-medium">
                              <a href="#" className="text-aqua-600 hover:text-aqua-500">
                                {" "}
                                View all posts <span aria-hidden="true">&rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <a
                href="#"
                className="text-base font-medium text-shark-500 hover:text-shark-900"
              >
                Sign in
              </a>
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
