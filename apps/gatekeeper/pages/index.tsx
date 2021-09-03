/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { WaCard } from "@waweb/gfx"
import clsx from "clsx"
import { InferGetStaticPropsType } from "next"

export const getStaticProps = async () => {
  return {
    props: {
      title: "Page Layout",
      user: {
        name: "Guest",
        email: "guest@watheia.app",
        imageUrl: "https://cdn.watheia.org/assets/icon.png"
      },
      userNavigation: [
        { name: "Account", href: "/account" },
        { name: "Profile", href: "/profile" },
        { name: "Sign in", href: "/signin" }
      ],
      navigation: [
        { name: "Home", href: "/home", current: true },
        { name: "About", href: "/home/about", current: false },
        { name: "Blog", href: "/blog", current: false },
        { name: "Materials", href: "/home/materials", current: false },
        { name: "Contact", href: "/home/contact", current: false }
      ],
      social: [
        {
          name: "Facebook",
          href: "https://facebook.com/watheialabs",
          icon: "facebook"
        },
        {
          name: "Instagram",
          href: "#",
          icon: "instagram"
        },
        {
          name: "Twitter",
          href: "#",
          icon: "twitter"
        },
        {
          name: "GitHub",
          href: "https://github.com/watheia",
          icon: "github"
        }
      ]
    }
  }
}

const Navigator = ({ navigation, user, userNavigation }) => (
  <Disclosure as="nav" className="bg-shark-800">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="border-b border-shark-700">
            <div className="flex items-center justify-between h-16 px-4 sm:px-0">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <WaCard className="h-8 w-8" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          item.current
                            ? "bg-shark-900 text-shark-50"
                            : "text-shark-300 hover:bg-shark-700 hover:text-shark-50",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="bg-shark-800 p-1 text-shark-400 rounded-full hover:text-shark-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-shark-800 focus:ring-shark-50"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="max-w-xs bg-shark-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-shark-800 focus:ring-shark-50">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-shark-50 ring-1 ring-shark-900 ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={clsx(
                                  active ? "bg-shark-100" : "",
                                  "block px-4 py-2 text-sm text-shark-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-shark-800 inline-flex items-center justify-center p-2 rounded-md text-shark-400 hover:text-shark-50 hover:bg-shark-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-shark-800 focus:ring-shark-50">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="border-b border-shark-700 md:hidden">
          <div className="px-2 py-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={clsx(
                  item.current
                    ? "bg-shark-900 text-shark-50"
                    : "text-shark-300 hover:bg-shark-700 hover:text-shark-50",
                  "block px-3 py-2 rounded-md text-shark-50 font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-shark-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
              </div>
              <div className="ml-3">
                <div className="text-shark-50 font-medium leading-none text-shark-50">
                  {user.name}
                </div>
                <div className="text-sm font-medium leading-none text-shark-400">
                  {user.email}
                </div>
              </div>
              <button
                type="button"
                className="ml-auto bg-shark-800 flex-shrink-0 p-1 text-shark-400 rounded-full hover:text-shark-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-shark-800 focus:ring-shark-50"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              {userNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-shark-50 font-medium text-shark-400 hover:text-shark-50 hover:bg-shark-700"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
)

const PageHeader = ({ title }) => (
  <header className="py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-shark-50">{title}</h1>
    </div>
  </header>
)

const MainContent = () => (
  <main className="-mt-32">
    <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
      {/* Replace with your content */}
      <div className="bg-shark-50 rounded-lg shadow px-2 py-3 sm:px-5 sm:py-6">
        <div className="border-4 border-dashed border-shark-200 rounded-lg h-96" />
      </div>
      {/* /End replace */}
    </div>
  </main>
)

const Footer = ({ social }) => (
  <footer className="bg-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex justify-center space-x-6 md:order-2">
        {social.map((item) => (
          <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-base text-gray-400">
          &copy; 2021 Watheia Labs, LLC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

const Index = ({
  user,
  title,
  navigation,
  userNavigation,
  social
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <div className="bg-shark-800 pb-32">
        <Navigator navigation={navigation} user={user} userNavigation={userNavigation} />
        <PageHeader title={title} />
      </div>
      <MainContent />
      <Footer social={social} />
    </div>
  )
}

export default Index
