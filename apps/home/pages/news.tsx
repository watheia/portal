import ArrowRight from "@material-ui/icons/ArrowRightAlt"
import { Link } from "@waweb/atoms"
import { Post } from "@waweb/dato"
import React, { HtmlHTMLAttributes } from "react"
import clsx from "clsx"
import { PageLayout, withLayout } from "@waweb/layout"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { blogPosts } from "@waweb/dato"

export const getStaticProps: GetStaticProps<NewsProps> = async (context) => {
  return {
    props: {
      posts: blogPosts
    }
  }
}

export type NewsProps = {
  posts: Post[]
} & HtmlHTMLAttributes<HTMLDivElement>

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
export const News = ({
  posts,
  className,
  ...props
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div
      className={clsx(
        "bg-shark-100 apt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8",
        "bg-shark-100 apt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8",
        className
      )}
      {...props}
    >
      <div className="relative max-w-lg mx-auto divide-y-2 divide-shark-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-shark-900 sm:text-4xl">
            Micro News
          </h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p className="text-xl text-shark-500">
              A curated list on breaking tech news, delivered strait to your inbox.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none w-full px-4 py-2 border border-shark-300 text-base rounded-md text-shark-900 bg-white placeholder-shark-500 focus:outline-none focus:ring-aqua-500 focus:border-aqua-500 lg:max-w-xs"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                <button
                  type="button"
                  className="w-full bg-aqua-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-secondary font-medium text-white hover:bg-aqua-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-500 sm:w-auto sm:inline-flex"
                >
                  Notify me
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {blogPosts &&
            blogPosts.map((post) => (
              <div key={post.title}>
                <p className="text-sm text-shark-400">
                  <time dateTime={post.datetime}>{post.date}</time>
                </p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-shark-900">{post.title}</p>
                  <p className="mt-3 text-base">{post.description}</p>
                </a>
                <div className="mt-3">
                  <Link
                    href={post.href}
                    className="text-base font-semibold hover:underline hover:font-bold text-aqua-600 hover:text-aqua-500"
                  >
                    Learn more
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

const NewsPage = withLayout(News, PageLayout)
export default NewsPage
