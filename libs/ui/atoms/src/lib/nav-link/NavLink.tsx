import React, { useMemo } from "react"
import clsx from "clsx"

import { isBrowser, compareUrl } from "@watheia/utils"
import Link, { LinkProps } from "../link"
import styles from "./NavLink.module.scss"

export type NavLinkProps = LinkProps & {
  /** class name to apply when active */
  activeClassName?: string
  /** styles to apply when active. Will be merged with the style prop */
  activeStyle?: React.CSSProperties
  /** href should match url exactly in order to apply. */
  exact?: boolean
  /** take in consideration trailing slash on the location pathname */
  strict?: boolean
  /** explicit active state override */
  isActive?: (() => boolean) | undefined
}

/**
 * A special version of `<Link/>` that will add styles to the rendered element when it matches the current URL.
 * Used to provide default fallbacks for next/router
 */
export function NavLink({
  activeClassName,
  activeStyle,
  isActive,
  exact,
  strict,
  style,
  className,
  ...rest
}: NavLinkProps) {
  // TODO - consider using getLocation()
  const activeHref = isBrowser ? window.location.href : "/"

  const isDefaultActive = useMemo(
    () => rest.href && compareUrl(activeHref, rest.href),
    [activeHref, rest.href]
  )

  const calcIsActive = isActive?.() || isDefaultActive

  const combinedStyles = useMemo(
    () => (calcIsActive && activeStyle ? { ...style, ...activeStyle } : style),
    [activeStyle, calcIsActive, style]
  )

  return (
    <Link
      {...rest}
      style={combinedStyles}
      className={clsx(styles.link, className, calcIsActive && activeClassName)}
    />
  )
}
