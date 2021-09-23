import { HtmlHTMLAttributes } from "react"
import Icon from "./SocialIcon"
import Link from "next/link"
import clsx from "clsx"
import { Route } from "@watheia/catalog"

export const social: Route[] = [
  {
    name: "Facebook",
    href: "https://facebook.com/watheialabs",
    icon: "facebook"
  },
  {
    name: "Instagram",
    href: "#",
    icon: "instagram"
  },
  {
    name: "Twitter",
    href: "#",
    icon: "twitter"
  },
  {
    name: "GitHub",
    href: "https://github.com/watheia",
    icon: "github"
  }
]

/* eslint-disable-next-line */
export type FooterProps = {
  social?: Route[]
} & HtmlHTMLAttributes<HTMLDivElement>

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer className={clsx("bg-shark-700", className)} {...props}>
      <div className="max-w-7xl mx-auto py-4 px-6 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-shark-400 hover:text-shark-500"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon && (
                <Icon iconClass={item.icon} className="h-6 w-6" aria-hidden="true" />
              )}
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-shark-300">
            &copy; 2021{" "}
            <Link href="/terms-and-conditions" passHref>
              <a className="text-shark-50">Watheia Labs, LLC</a>
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
