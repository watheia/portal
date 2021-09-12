import { render } from "@testing-library/react"

import PrincipalNav from "./PrincipalNav"

describe("PrincipalNav", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PrincipalNav />)
    expect(baseElement).toBeTruthy()
  })
})
