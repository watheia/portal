import "./footer.module.css"
import clsx from "clsx"
import { WaBanner } from "@waweb/gfx"
import { Link } from "@waweb/atoms"
import { missionStatement, Sitemap } from "@waweb/model"
import { HTMLAttributes } from "react"

/* eslint-disable-next-line */
export type FooterProps = {
  navigation: Sitemap
} & HTMLAttributes<HTMLDivElement>

export const Footer = ({ navigation, className, ...props }: FooterProps) => (
  <div
    className={clsx("bg-shark-100", className)}
    aria-labelledby="footer-heading"
    {...props}
  >
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-8 xl:col-span-1">
          <WaBanner className="h-10" />
          <p className="text-shark-500 text-base">{missionStatement}</p>
          <div className="flex space-x-6">
            {navigation &&
              navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(item.href ?? "hover:text-shark-500", "text-shark-400")}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-shark-400 tracking-wider uppercase">
                Solutions
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-shark-500 hover:text-shark-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-shark-400 tracking-wider uppercase">
                Support
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation &&
                  navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-shark-500 hover:text-shark-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-shark-400 tracking-wider uppercase">
                Company
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation &&
                  navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-shark-500 hover:text-shark-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-shark-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation &&
                  navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-shark-500 hover:text-shark-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-shark-200 py-8">
        <p className="text-base text-shark-400 xl:text-center">
          &copy; 2021 Watheia Labs, LLC. All rights reserved.
        </p>
      </div>
    </div>
  </div>
)

export default Footer
