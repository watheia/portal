import styles from "./heading.module.css"
import clsx from "clsx"
import { HtmlHTMLAttributes } from "react"

export type HeadingProps = {
  title?: string
  subTitle?: string
  content?: string
} & HtmlHTMLAttributes<HTMLDivElement>

export function Heading({ className, children, title, subTitle, ...rest }: HeadingProps) {
  return (
    <div className={clsx(styles.root, className)} {...rest}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
      {children && <div className={styles.content}>{children}</div>}
    </div>
  )
}

export default Heading
