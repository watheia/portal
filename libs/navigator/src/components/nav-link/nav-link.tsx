import React from "react"
import type { NavLinkProps } from "../native-nav-link"
import { useRouting } from "../routing-provider"

export type { NavLinkProps }

export function NavLink(props: NavLinkProps) {
  const ActualNavLink = useRouting().NavLink
  return <ActualNavLink {...props} />
}
