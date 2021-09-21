import { HtmlHTMLAttributes } from "react"
import { CDN_URL } from "@watheia/model"
import styles from "./Logo.module.css"

type Variant = "primary" | "secondary"

export type LogoProps = {
  href?: string
  variant?: Variant
} & HtmlHTMLAttributes<HTMLAnchorElement>

const primaryUrl = "/images/watheia.png"

const altUrl = "/images/watheia-alt.png"

export function Logo({ href = "/", variant = "primary", ...rest }: LogoProps) {
  return (
    <a href={href} className="flex" {...rest}>
      <span className="sr-only">Home</span>
      <img
        className="h-8 w-auto sm:h-10"
        src={variant === "primary" ? primaryUrl : altUrl}
        alt="Watheia"
      />
    </a>
  )
}

export default Logo
