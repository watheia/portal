/* This example requires Tailwind CSS v2.0+ */
import clsx from "clsx"
const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#", color: "bg-indigo-100 text-indigo-800" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 16, 2021",
    datetime: "2021-03-16",
    author: {
      name: "Paul York",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    readingTime: "6 min"
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#", color: "bg-pink-100 text-pink-800" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 10, 2021",
    datetime: "2021-03-10",
    author: {
      name: "Dessie Ryan",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    readingTime: "4 min"
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#", color: "bg-green-100 text-green-800" },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    date: "Feb 12, 2021",
    datetime: "2021-02-12",
    author: {
      name: "Easer Collins",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    readingTime: "11 min"
  }
]

export const Header = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Take control of your team.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Start building for free, then add a site plan to go live. Account plans unlock
            additional features.
          </p>
        </div>
      </div>
    </div>
  )
}

const FeaturedPosts = () => (
  <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div className="relative max-w-lg mx-auto divide-y-2 divide-shark-200 lg:max-w-7xl">
      <div>
        <h2 className="text-3xl tracking-tight font-extrabold text-shark-900 sm:text-4xl">
          Recent publications
        </h2>
        <p className="mt-3 text-xl text-shark-500 sm:mt-4">
          Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst
          amet. Sapien tortor lacus arcu.
        </p>
      </div>
      <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {posts.map((post) => (
          <div key={post.title}>
            <div>
              <a href={post.category.href} className="inline-block">
                <span
                  className={clsx(
                    post.category.color,
                    "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                  )}
                >
                  {post.category.name}
                </span>
              </a>
            </div>
            <a href={post.href} className="block mt-4">
              <p className="text-xl font-semibold text-shark-900">{post.title}</p>
              <p className="mt-3 text-base text-shark-500">{post.description}</p>
            </a>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href={post.author.href}>
                  <span className="sr-only">{post.author.name}</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={post.author.imageUrl}
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-shark-900">
                  <a href={post.author.href}>{post.author.name}</a>
                </p>
                <div className="flex space-x-1 text-sm text-shark-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readingTime} read</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default function Index() {
  return (
    <>
      <Header />
      <FeaturedPosts />
    </>
  )
}
