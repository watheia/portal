import { HTMLAttributes } from "react"
import clsx from "clsx"
import styles from "./page.module.css"

/* eslint-disable-next-line */
export type PageProps = HTMLAttributes<HTMLDivElement>

/* This example requires Tailwind CSS v2.0+ */
export default function Page({ children, className, ...props }: PageProps) {
  return (
    <div className={clsx(styles.page, className)}>
      <div className={clsx(styles.content)}>{children}</div>
    </div>
  )
}
