import { HtmlHTMLAttributes } from "react"
import NLink from "next/link"

import styles from "./Link.module.scss"
import clsx from "clsx"

export type LinkProps = {
  href: string

  /**
   * opens link in a new tab
   */
  external?: boolean
} & HtmlHTMLAttributes<HTMLAnchorElement>

/**
 * Base component for link, equivalent to a `<a/>` tag.
 *
 * This component is a placeholder for future implementations,
 * where different applications can override this component with their underlying navigation system.
 */
export function Link({ href, external, children, className, ...rest }: LinkProps) {
  // Use standard link for external
  if (external || href.startsWith("https://")) {
    return (
      <a
        className={clsx(styles.link, className)}
        data-bit-id="watheia.app/atoms/link"
        rel="noreferrer"
        target="_blank"
        href={href}
        {...rest}
      >
        {children}
      </a>
    )
  }

  //used wrapped link for internal
  return (
    <NLink href={href} passHref>
      <a
        className={clsx(styles.link, className)}
        data-bit-id="watheia.app/atoms/link"
        {...rest}
      >
        {children}
      </a>
    </NLink>
  )
}

export default Link
