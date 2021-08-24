import Link from "next/link"
import s from "./footer.module.css"

import Logo from "../../gfx/icons/logo"
import GitHub from "../../gfx/icons/github"
import WaCard from "../../gfx/wa-card/wa-card"

export default function Footer() {
  return (
    <footer className="mx-auto max-w-8xl px-6 bg-shark-900 footer">
      <div className="py-3 flex flex-col md:flex-row justify-between items-center space-y-2 bg-shark-900">
        <div className="text-shark-300">
          <span>&copy; 2020 Watheia Labs, LLC. All rights reserved.</span>
        </div>
        <div className="flex items-center">
          <span className="text-primary">Expertly Crafted by</span>
          <WaCard className="inline-block h-24 ml-4 text-primary" />
        </div>
      </div>
    </footer>
  )
}
