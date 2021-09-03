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
      title: "Page/Site Title",
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
        { name: "Blog", href: "/blog", current: false },
        { name: "Contact", href: "/contact", current: false }
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

const Article = () => (
  <div className="relative">
    <div className="text-lg max-w-prose mx-auto">
      <h1>
        <span className="block text-base text-center text-aqua-600 font-semibold tracking-wide uppercase">
          Introducing
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-shark-900 sm:text-4xl">
          JavaScript for Beginners
        </span>
      </h1>
      <p className="mt-8 text-xl text-shark-500 leading-8">
        Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui
        mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla
        orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
      </p>
    </div>
    <div className="mt-6 prose prose-aqua prose-lg text-shark-500 mx-auto">
      <p>
        Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed{" "}
        <strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae sed turpis id.
        Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
        erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{" "}
        <a href="/home/contact">Mattis mauris semper</a> sed amet vitae sed turpis id.
      </p>
      <ul role="list">
        <li>Quis elit egestas venenatis mattis dignissim.</li>
        <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
        <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
      </ul>
      <p>
        Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo
        sit viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis
        elementum ut nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
        Amet, duis sed elit interdum dignissim.
      </p>
      <h2>From beginner to expert in 30 days</h2>
      <p>
        Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis
        arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat
        vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris.
        Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
        ipsum eu a sed convallis diam.
      </p>
      <blockquote>
        <p>
          Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
          consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu
          morbi.
        </p>
      </blockquote>
      <p>
        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
        mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio
        penatibus risus viverra tellus varius sit neque erat velit.
      </p>
      <figure>
        <img
          className="w-full rounded-lg"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
          alt=""
          width={1310}
          height={873}
        />
        <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
      </figure>
      <h2>Everything you need to get up and running</h2>
      <p>
        Purus morbi dignissim senectus mattis <a href="/">adipiscing</a>. Amet, massa quam
        varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus
        tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis
        fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
        congue erat ac. Cras fermentum convallis quam.
      </p>
      <p>
        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
        mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio
        penatibus risus viverra tellus varius sit neque erat velit.
      </p>
    </div>
  </div>
)

const Navigator = ({ navigation, user, userNavigation }) => (
  <Disclosure as="nav" className="bg-shark-800">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="border-b border-shark-700">
            <div className="flex items-center justify-between h-16 px-4 sm:px-0">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <WaCard className="h-16 w-16" />
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
        <Article />
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
    <>
      <div className="bg-shark-800 pb-32">
        <Navigator navigation={navigation} user={user} userNavigation={userNavigation} />
        <PageHeader title={title} />
      </div>
      <MainContent />
      <Footer social={social} />
    </>
  )
}

export default Index
