/* This example requires Tailwind CSS v2.0+ */
export default function FourOFour(props) {
  return (
    <div className="bg-shark-50 min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-aqua-600 sm:text-5xl">404</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-shark-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-shark-900 tracking-tight sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-1 text-base text-shark-500">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <a
                href="/corporate"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-shark-50 bg-aqua-600 hover:bg-aqua-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-500"
              >
                Go back home
              </a>
              <a
                href="/support"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-aqua-700 bg-aqua-100 hover:bg-aqua-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-500"
              >
                Get support
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
