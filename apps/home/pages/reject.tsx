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
import React, { Fragment } from "react"
import Image from "next/image"
import { Dotscreen } from "@waweb/gfx"

export default function Home(props) {
  return (
    <div>
      <div className="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
        <svg
          className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-shark-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            y={72}
            width={640}
            height={640}
            className="text-shark-50"
            fill="currentColor"
          />
          <rect
            x={118}
            width={404}
            height={784}
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>

      <div className="relative pt-2 pb-16 sm:pb-24 lg:pb-32">
        <article className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-tight sm:text-shark-400 lg:text-sm xl:text-shark-400">
                  Now accepting early adopters
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-shark-900">Take control of your</span>
                  <span className="block text-aqua-600">micro components</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-shark-800 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Let micro components drive feature delivery at global scale with the worlds{" "}
                <s>first</s> best DevOps platform built for IoT and the edge.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto text-left lg:mx-0">
                <p className="text-base font-xsm text-shark-800">
                  Get single use login token
                </p>
                <form action="#" method="POST" className="mt-3 sm:flex">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block w-full py-3 text-base rounded-md placeholder-shark-500 shadow-sm focus:ring-aqua-500 focus:border-aqua-500 sm:flex-1 border-shark-300"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full px-6 py-3 border border-transparent text-secondary font-medium rounded-md text-white bg-aqua-600 shadow-sm hover:bg-aqua-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Send Link
                  </button>
                </form>
                <p className="mt-3 text-xs text-shark-800">
                  We care about the protection of your data. Your email address will not
                  saved any longer than needed to send the OTP code. Read our{" "}
                  <a
                    href="https://cdn.watheia.org/assets/terms-and-conditions.txt"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-regal-blue-800 hover:text-regal-blue-600 underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  for details.
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Dotscreen />
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-500"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <Image
                    width="888"
                    height="710.80704"
                    className="w-full rounded-xxl"
                    src="/illustrations/undraw_server_cluster_jwwq.svg"
                    alt="Presentstion thumbnail"
                  />
                  <div
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-20 w-20 text-aqua-500"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}