import { HTMLAttributes } from "react"
import clsx from "clsx"
import styles from "./panel.module.css"

/* eslint-disable-next-line */
export type PanelProps = HTMLAttributes<HTMLDivElement>

/* This example requires Tailwind CSS v2.0+ */
export default function Panel({ children, className, ...props }: PanelProps) {
  return (
    <div className={clsx(styles.panel, className)}>
      <div className={clsx(styles.content)}>{children}</div>
    </div>
  )
}
