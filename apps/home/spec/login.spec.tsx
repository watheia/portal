import { render } from "@testing-library/react"

import Login from "../pages/auth"

describe("Login", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Login />)
    expect(baseElement).toBeTruthy()
  })
})
