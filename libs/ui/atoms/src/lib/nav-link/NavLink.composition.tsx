import React from "react"
import { NavLink } from "./NavLink"

const Center = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {children}
    </div>
  )
}

export const BaseLink = () => (
  <Center>
    <NavLink href="https://watheia.app">watheia.app</NavLink>
  </Center>
)

export const BaseLinkWithExternal = () => (
  <Center>
    <NavLink href="https://watheia.app" external={true} data-testid="test-link">
      watheia.app
    </NavLink>
  </Center>
)
