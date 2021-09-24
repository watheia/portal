import React from "react"
import { Link } from "./Link"

const Center = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {children}
    </div>
  )
}

export const BaseLink = () => (
  <Center>
    <Link href="https://watheia.app">watheia.app</Link>
  </Center>
)

export const BaseLinkWithExternal = () => (
  <Center>
    <Link href="https://watheia.app" external={true} data-testid="test-link">
      watheia.app
    </Link>
  </Center>
)
