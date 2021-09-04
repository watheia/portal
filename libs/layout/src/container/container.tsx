import { HtmlHTMLAttributes } from "react"
import "./container.module.css"

/* eslint-disable-next-line */
export type ContainerProps = HtmlHTMLAttributes<HTMLDivElement>

export function Container({children, className, ...props}: ContainerProps) {
  return (
    <div>
      <h1>Welcome to Container!</h1>
    </div>
  )
}

export default Container
