import { HTMLAttributes } from "react"
import s from "./loading-dots.module.scss"

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
