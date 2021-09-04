import { HTMLAttributes } from "react"
import clsx from "clsx"
import { navigation } from "@waweb/utils"
import Header from "../components/header"
import Footer from "../components/footer"

/* eslint-disable-next-line */
export type PageProps = HTMLAttributes<HTMLDivElement>

/* This example requires Tailwind CSS v2.0+ */
export default function Page({ children, className, ...props }: PageProps) {
  return (
    <>
      <Header />
      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-shark-50 rounded-lg shadow px-2 py-3 sm:px-5 sm:py-6">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
