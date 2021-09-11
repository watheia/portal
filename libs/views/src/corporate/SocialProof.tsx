import { HtmlHTMLAttributes } from "react"

/* This example requires Tailwind CSS v2.0+ */
export function SocialProof(props: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className="bg-indigo-200 bg-opacity-25">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <h2 className="max-w-md mx-auto text-3xl font-extrabold text-secondary text-center lg:max-w-xl lg:text-left">
            The world&apos;s most innovative companies choose Watheia Labs
          </h2>
          <div className="flow-root self-center mt-8 lg:mt-0">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-teal-900.svg"
                  alt="Workcation"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/tuple-logo-teal-900.svg"
                  alt="Tuple"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/level-logo-teal-900.svg"
                  alt="Level"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialProof
