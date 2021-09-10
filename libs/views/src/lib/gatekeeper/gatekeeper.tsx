import { ChevronRightIcon } from "@heroicons/react/outline"
import { supabase } from "@watheia/supabase"
import { useState } from "react"
import "./gatekeeper.module.css"

/* eslint-disable-next-line */
export interface GatekeeperProps {}

export function Gatekeeper(props: GatekeeperProps) {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")

  const handleLogin = async (email: string) => {
    try {
      setLoading(true)
      const { error, user } = await supabase.auth.signIn({ email })
      if (error) throw error
      console.log("user", user)
      alert("Check your email for the login link!")
    } catch (error) {
      const e: any = error
      console.log("Error thrown:", e.message)
      alert(e.error_description || e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-shark-900">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <span className="inline-flex items-center text-shark-50 bg-black rounded-full p-1 pr-2 sm:text-shark-300 lg:text-sm xl:text-shark-300 hover:text-shark-50">
                <span className="px-3 py-0.5 text-shark-50 text-xs font-semibold leading-5 uppercase tracking-wide bg-aqua-500 rounded-full">
                  Connected
                </span>
                <span className="ml-4 text-sm">Switch to realtime mode (demo)</span>
              </span>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-shark-50 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Iron</span>
                <span className="block text-aqua-400">DevOps</span>
              </h1>
              <p className="mt-3 text-shark-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                A managed Platform as a Service (PaaS) for easily deploying rich data
                connected apps to the edge.
              </p>
              <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input type="email" placeholder="Enter your email" />
                      <input
                        id="email"
                        className="block w-full px-4 py-3 rounded-md border-0 text-base text-shark-900 placeholder-shark-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-300 focus:ring-offset-shark-900"
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault()
                          handleLogin(email)
                        }}
                        disabled={loading}
                        className="block w-full py-3 px-4 rounded-md shadow bg-aqua-500 text-shark-50 font-medium hover:bg-aqua-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-300 focus:ring-offset-shark-900"
                      >
                        Send Login
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-shark-300 sm:mt-4">
                    Your privacy is important to us. Please read our{" "}
                    <a href="/terms-and-conditions" className="font-medium text-shark-50">
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
                src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gatekeeper
