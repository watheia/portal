import { HTMLAttributes, SVGProps } from "react"
import s from "./loading-dots.module.css"

const LoadingDots = (props: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={s.root} {...props}>
      <span />
      <span />
      <span />
    </span>
  )
}

export default LoadingDots
