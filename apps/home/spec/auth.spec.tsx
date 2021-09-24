import { render } from "@testing-library/react"

import Auth from "../pages/auth"

describe("Auth", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Auth />)
    expect(baseElement).toBeTruthy()
  })
})
