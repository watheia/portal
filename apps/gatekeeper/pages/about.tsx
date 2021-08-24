/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function About() {
  return (
    <div className="py-16 bg-shark-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="text-base max-w-prose mx-auto lg:max-w-none">
          <h2 className="text-base text-regal-blue-700 font-semibold tracking-wide uppercase">
            We create digital products.
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-shark-900 sm:text-4xl">
            About Us
          </p>
        </div>
        <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
          <p className="text-lg text-shark-700 text-2xl mx-4 text-">
            Our mission is to make is to make technology more accesible to all.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="relative z-10">
            <div className="prose prose-ai-aqua text-shark-500 mx-auto lg:max-w-none">
              <p className="text-shark-900 font-bold">
                Here are just few things that make our mission easier
              </p>
              <ul role="list">
                <li>Design architectures that are adaptable and resilient to change</li>
                <li>Progressively enhance behavior based on detected hardware features.</li>
                {/* <li>
                  Advocate for the elimination of software patents and a reduction to all
                  copyright terms
                </li> */}
                <li>
                  Refurbish, repair, or recycle electronic waste (household appliances,
                  printer/fax machines, multi-unit phone systems, whole desktop computers
                  (most likely missing the install key).
                </li>
                <li>
                  Maintain a free emergency hotline for seniors as they become exposed to
                  large-scale misinformation, scams, and identity theft campaigns.
                </li>
              </ul>
              <p>
                Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel
                ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in
                venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit
                aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
              </p>
              <h3>We’re here to help</h3>
              <p>
                Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur
                pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id
                lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum
                posuere donec ultricies non morbi. Mi a platea auctor mi.
              </p>
            </div>
            <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ai-aqua-600 hover:bg-ai-aqua-700"
                >
                  Contact sales
                </a>
              </div>
              <div className="rounded-md shadow ml-4">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-ai-aqua-600 bg-white hover:bg-shark-100"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                  x={0}
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
                width={404}
                height={384}
                fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
              />
            </svg>
            <blockquote className="relative bg-white rounded-lg shadow-lg">
              <div className="rounded-t-lg px-6 py-4 sm:px-6 sm:pt-5 sm:pb-8">
                <img
                  src="https://cdn.watheia.org/assets/logo-banner.png"
                  alt="Workcation"
                  className="h-14 float-left mr-8"
                />
                <div className="relative text-lg text-shark-900 font-medium mt-4">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-shark-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-tracking-tight">
                    Watheia Labs was formed by Aaron R Miller and Patrick S Stevenson to
                    build and manage a portfolio of IT products and services.
                  </p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
