export const ServerlessSection = () => (
  <div className="relative bg-shark-50 pt-16 sm:pt-24 lg:pt-32">
    <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
      <div>
        <h2 className="text-base font-semibold tracking-wider text-aqua-600 uppercase">
          Serverless
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-shark-900 tracking-tight sm:text-4xl">
          No server? No problem.
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-shark-500">
          Your virtual private cloud comes with everything you need for modern serverless
          CI/CD deployments. Installing single-use serverless functions and complex
          applications that can scale to 0 is a breeze using OpenFAAS and Knative, ideal for
          GitLab's serverless Auto DevOps coming in 2021.
        </p>
      </div>
      <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
        <img
          className="rounded-lg shadow-xl ring-1 ring-shark-900 ring-opacity-5"
          src="https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
)

export default ServerlessSection
