import { HtmlHTMLAttributes } from "react"
import "./paper.module.css"
import clsx from "clsx"

export type PaperProps = HtmlHTMLAttributes<HTMLDivElement>

export const Paper = ({ children, className, ...props }: PaperProps) => {
  return (
    <div
      className={clsx("max-w-7xl mx-auto sm:py-6 sm:px-6 lg:px-8 min-h-screen", className)}
      {...props}
    >
      <div className="overflow-hidden bg-transparent sm:bg-shark-50 sm:shadow sm:rounded-lg">
        <div className="px-0 py-0 sm:px-2 sm:py-3 lg:p-8 lg:py-10"> {children}</div>
      </div>
    </div>
  )
}

export default Paper
