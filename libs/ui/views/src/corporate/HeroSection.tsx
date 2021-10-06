import { LoginForm, useSession } from "@watheia/auth"

const StatusIndicator = ({ isOnline = false }: { isOnline: boolean }) => {
  return isOnline ? <OnlineIndicator /> : <OfflineIndicator />
}

const OnlineIndicator = () => (
  <span className="inline-flex items-center text-shark-50 bg-shark-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-shark-200">
    <span className="px-3 py-0.5 text-aqua-400 text-xs font-semibold leading-5 uppercase tracking-wide bg-shark-400 rounded-full">
      active
    </span>
    <span className="ml-4 text-sm text-secondary-2">Please enjoy your stay.</span>
  </span>
)

const OfflineIndicator = () => (
  <span className="inline-flex items-center text-shark-50 bg-shark-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-shark-200">
    <span className="px-3 py-0.5 text-shark-50 text-xs font-semibold leading-5 uppercase tracking-wide bg-shark-400 rounded-full">
      offline
    </span>
    <span className="ml-4 text-sm text-secondary-2">Login to activate realtime.</span>
  </span>
)

export const HeroSection = () => {
  const { session } = useSession()
  // intentional cast to boolean representationd
  // eslint-disable-next-line no-extra-boolean-cast
  const isOnline = !!session?.user
  console.log(`isOnline=${isOnline}`)

  return (
    <section className="pt-10 bg-shark-700 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden shadow-md">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <StatusIndicator isOnline={isOnline} />
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-shark-50 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">A better way to ship</span>
                <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-aqua-200 to-aqua-500 sm:pb-5">
                  modern web apps
                </span>
              </h1>
              <p className="text-base text-shark-300 sm:text-xl lg:text-lg xl:text-xl">
                Let micro components drive feature delivery at global scale with the worlds{" "}
                <s>first</s> best DevOps platform built for IoT and the edge.
              </p>
              {!isOnline && (
                <div className="mt-10 sm:mt-12">
                  <LoginForm />
                </div>
              )}
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
    </section>
  )
}

export default HeroSection
