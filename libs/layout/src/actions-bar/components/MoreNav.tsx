import { Popover } from "@headlessui/react"
import { blogPosts, corporate, resources } from "../data"
import { Link } from "@watheia/atoms"

const Nav = () => (
  <nav className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
    <div>
      <h3 className="text-sm font-medium tracking-wide text-primary-2 uppercase">
        Corporate
      </h3>
      <ul className="mt-5 space-y-6">
        {corporate.map((item) => (
          <li key={item.name} className="flow-root">
            <Link
              href={item.href}
              className="-m-3 p-3 flex items-center rounded-md font-medium text-primary hover:bg-shark-50"
            >
              <item.icon
                className="flex-shrink-0 h-6 w-6 text-shark-400"
                aria-hidden="true"
              />
              <span className="ml-4">{item.name}</span>
            </Link>
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
            <Link
              href={item.href}
              className="-m-3 p-3 flex items-center rounded-md font-medium text-primary hover:bg-shark-50"
            >
              <item.icon
                className="flex-shrink-0 h-6 w-6 text-shark-400"
                aria-hidden="true"
              />
              <span className="ml-4">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
)

export const MoreNav = () => (
  <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
    <div className="absolute inset-0 flex">
      <div className="bg-white w-1/2" />
      <div className="bg-shark-50 w-1/2" />
    </div>
    <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
      <Nav />
      <div className="bg-shark-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
        <div>
          <h3 className="text-sm font-medium tracking-wide text-primary-2 uppercase">
            From the blog
          </h3>
          <ul className="mt-6 space-y-6">
            {blogPosts.map((post) => (
              <li key={post.id} className="flow-root">
                <Link
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
                    <h4 className="font-medium text-primary truncate">{post.name}</h4>
                    <p className="mt-1 text-sm text-primary-2">{post.preview}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 text-sm font-medium">
          <Link href="/blog" className="text-aqua-600 hover:text-aqua-500">
            {" "}
            View all posts <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  </Popover.Panel>
)

export default MoreNav
