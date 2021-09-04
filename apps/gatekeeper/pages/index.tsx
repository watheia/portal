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
import { Page } from "@waweb/layout"
import { META_DESCRIPTION } from "@waweb/model"

const Header = () => (
  <div>
    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-shark-50 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
      <span className="md:block">Watheia</span>{" "}
      <span className="text-aqua-400 md:block">Gatekeeper</span>
    </h1>
    <p className="mt-3 text-secondary text-skark-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
      Please enjoy your stay.
    </p>
    <p className="mt-8 text-sm text-shark-50 uppercase tracking-wide font-semibold sm:mt-10">
      Used by
    </p>
    <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
      <div className="flex flex-wrap items-start justify-between">
        <div className="flex justify-center px-1">
          <img
            className="h-9 sm:h-10"
            src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
            alt="Tuple"
          />
        </div>
        <div className="flex justify-center px-1">
          <img
            className="h-9 sm:h-10"
            src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
            alt="Workcation"
          />
        </div>
        <div className="flex justify-center px-1">
          <img
            className="h-9 sm:h-10"
            src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
            alt="StaticKit"
          />
        </div>
      </div>
    </div>
  </div>
)

const AuthForm = () => (
  <div className="bg-shark-50 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg">
    <div className="px-4 py-8 sm:px-10">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Authentication Request
      </h3>
      <div className="mt-6">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="mobile-or-email" className="sr-only">
              Mobile number or email
            </label>
            <input
              type="text"
              name="mobile-or-email"
              id="mobile-or-email"
              autoComplete="email"
              placeholder="Mobile number or email"
              required
              className="block w-full shadow-sm focus:ring-aqua-500 focus:border-aqua-500 sm:text-sm border-shark-300 rounded-md"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-shark-50 bg-aqua-600 hover:bg-aqua-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-500"
            >
              Get login code
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="px-4 py-6 bg-shark-50 border-t-2 border-shark-200 sm:px-10">
      <p className="text-xs leading-5 text-shark-500">
        Your privacy is important. Please see our{" "}
        <a href="#" className="font-medium text-shark-900 hover:underline">
          Terms &amp; Conditions
        </a>
        .
      </p>
    </div>
  </div>
)

const Index = (props) => {
  const meta = {
    title: "Gatekeeper",
    description: META_DESCRIPTION
  }
  return (
    <Page meta={meta} className="bg-shark-900">
      <div className="bg-shark-900">
        <div className="pt-6 pb-16 sm:pb-24">
          <main className="mt-16 sm:mt-24">
            <div className="mx-auto max-w-7xl">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                  <Header />
                </div>
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                  <AuthForm />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Page>
  )
}

export default Index
