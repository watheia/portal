import { HtmlHTMLAttributes } from "react"
import "./Logo.module.css"

/* eslint-disable-next-line */
export type LogoProps = { href?: string } & HtmlHTMLAttributes<HTMLAnchorElement>

export function Logo({ href = "/", ...rest }: LogoProps) {
  return (
    <a href={href} className="flex" {...rest}>
      <span className="sr-only">Home</span>
      <img
        className="h-8 w-auto sm:h-10"
        src="https://cdn.watheia.org/assets/watheia.svg"
        alt="Watheia"
      />
    </a>
  )
}

export default Logo
