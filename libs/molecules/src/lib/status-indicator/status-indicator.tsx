import { HTMLAttributes } from "react"
import clsx from "clsx"
import styles from "./status-indicator.module.css"

/* eslint-disable-next-line */
export type StatusIndicatorProps = {} & HTMLAttributes<HTMLSpanElement>

export function StatusIndicator({ className, ...rest }: StatusIndicatorProps) {
  return (
    <span className={clsx(styles.root, className)}>
      <span className={styles.pill}>Offline</span>
      <span className={styles.content}>Establishing isomorphic link...</span>
    </span>
  )
}

export default StatusIndicator
