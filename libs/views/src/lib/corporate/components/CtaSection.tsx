import ExternalLinkIcon from "@heroicons/react/outline/ExternalLinkIcon"

const CtaSection = () => (
  <div className="relative bg-shark-900">
    <div className="relative h-56 bg-aqua-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
        alt=""
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-aqua-500 to-aqua-400 mix-blend-multiply"
      />
    </div>
    <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
      <div className="md:ml-auto md:w-1/2 md:pl-10">
        <h2 className="text-base font-semibold uppercase tracking-wider text-shark-300">
          Award winning support
        </h2>
        <p className="mt-2 text-shark-50 text-3xl font-extrabold tracking-tight sm:text-4xl">
          We’re here to help
        </p>
        <p className="mt-3 text-lg text-shark-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus
          etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.
          Aliquet amet volutpat quisque ut interdum tincidunt duis.
        </p>
        <div className="mt-8">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-shark-900 bg-shark-50 hover:bg-shark-50"
            >
              Contact Sales
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
)

export default CtaSection
