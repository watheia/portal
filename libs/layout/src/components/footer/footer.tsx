import { HtmlHTMLAttributes } from "react"
import { Icon, Link } from "@waweb/atoms"
import { social as socialDefault, SocialLink } from "@waweb/model"
import clsx from "clsx"
import styles from "./footer.module.css"

/* eslint-disable-next-line */
export type FooterProps = {
  social?: SocialLink[]
} & HtmlHTMLAttributes<HTMLDivElement>

export function Footer({ social = socialDefault, className, ...props }: FooterProps) {
  return (
    <footer className={clsx(styles.footer, className)}>
      <div className="max-w-7xl mx-auto py-4 px-6 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-shark-400 hover:text-shark-500"
            >
              <span className="sr-only">{item.name}</span>
              <Icon iconClass={item.icon} className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-shark-300">
            &copy; 2021{" "}
            <Link href="https://watheia.app/" color="inherit" className="text-shark-50">
              Watheia Labs, LLC
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
