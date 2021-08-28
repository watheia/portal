/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          aqua: colors.aqua,
          aqua: colors.aqua,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, HTMLAttributes } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { ChevronRightIcon, ExternalLinkIcon } from "@heroicons/react/solid"
import { Watheia, WatheiaAlt, WaBanner } from "@waweb/gfx"
import { Navigator, Footer } from "@waweb/organisms"
import clsx from "clsx"
import { navigation, features, blogPosts, missionStatement } from "@waweb/model"

const Content = (props: HTMLAttributes<HTMLDivElement>) => (
  <main {...props}>
    {/* Hero section */}
    <div className="pt-10 bg-shark-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-12">
              <span className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                  We&apos;re hiring
                </span>
                <span className="ml-4 text-sm">Visit our careers page</span>
                <ChevronRightIcon
                  className="ml-2 w-5 h-5 text-gray-500"
                  aria-hidden="true"
                />
              </span>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">A better way to</span>
                <span className="pb-3 block bg-clip-text text-aqua-500 sm:pb-5">
                  ship micro frontends
                </span>
              </h1>
              <p className="text-base text-shark-200 sm:text-xl lg:text-lg xl:text-xl">
                Let micro components drive feature delivery at global scale with the worlds{" "}
                <s>first</s> best DevOps platform built for IoT and the edge.
              </p>
              <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        disabled
                        placeholder="Enter email to request login token"
                        className="block w-full px-4 py-3 rounded-md border-0 text-base text-shark-900 placeholder-shark-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-400 focus:ring-offset-shark-900 opacity-50"
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-aqua-500 to-aqua-700 text-white font-medium hover:from-aqua-700 hover:to-aqua-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-400 focus:ring-offset-shark-900 opacity-50"
                        disabled
                      >
                        Get early access
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-shark-300 sm:mt-4">
                    By providing your email, you agree to our{" "}
                    <a href="#" className="font-medium text-white">
                      terms or service
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <img
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Feature section with screenshot */}
    <div className="relative bg-gradient-to-b from-shark-100 to-white pt-16 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-aqua-600 uppercase">
            seamlessly scale from <code>0</code> to <code>100</code>
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-shark-900 tracking-tight sm:text-4xl">
            No server? No problem.
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-shark-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis
            quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
          <img
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src="https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    {/* Feature section with grid */}
    <div className="relative bg-gradient-to-b from-shark-50 to-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-aqua-600 uppercase">
          Deploy faster
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-shark-900 tracking-tight sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-shark-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis
          quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-shark-100 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-aqua-500 to-aqua-600 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-aqua-500"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-base tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 ttext-primary">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Testimonial section */}
    <div className="pb-16 bg-gradient-to-r from-aqua-500 to-aqua-600 lg:pb-0 lg:z-10 lg:relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="relative lg:-my-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
          />
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
            <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
              <img
                className="object-cover lg:h-full lg:w-full"
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
            <blockquote>
              <div>
                <svg
                  className="h-12 w-12 text-white opacity-25"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="mt-6 text-2xl font-medium text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla
                  vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc
                  urna, sit.
                </p>
              </div>
              <footer className="mt-6">
                <p className="text-base font-medium text-white">Judith Black</p>
                <p className="text-base font-medium text-aqua-100">CEO at PureInsights</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    {/* Blog section */}
    <div className="relative bg-shark-100 py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-aqua-600 uppercase">
            Learn
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-shark-900 tracking-tight sm:text-4xl">
            Helpful Resources
          </p>
          <p className="mt-5 mx-auto max-w-prose text-xl text-shark-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis
            quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-aqua-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-shark-900">{post.title}</p>
                    <p className="mt-3 text-base text-shark-500">{post.preview}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt={post.author.name}
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-shark-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-shark-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingLength} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="relative bg-shark-900">
      <div className="relative h-56 bg-regal-blue-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
          alt=""
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-shark-100 to-shark-200 mix-blend-multiply"
        />
      </div>
      <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-shark-300">
            Award winning support
          </h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            We’re here to help
          </p>
          <p className="mt-3 text-lg text-shark-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus
            tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum,
            augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-shark-900 bg-white hover:bg-shark-100"
              >
                Visit the help center
                <ExternalLinkIcon
                  className="-mr-1 ml-3 h-5 w-5 text-shark-400"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
)

export default function Index({ className, ...props }) {
  return (
    <div className={clsx("bg-shark-100", className)} {...props}>
      <div className="relative overflow-hidden">
        <header>
          <Navigator navigation={navigation.primary} />
        </header>
        <main>
          <Content />
        </main>
        <footer>
          <Footer navigation={navigation} />
        </footer>
      </div>
    </div>
  )
}
