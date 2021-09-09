import { HtmlHTMLAttributes } from "react"
import "./container.module.css"
import clsx from "clsx"

export type ContainerProps = HtmlHTMLAttributes<HTMLDivElement>

export const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={clsx("max-w-7xl mx-auto sm:py-6 sm:px-6 lg:px-8 min-h-screen", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
