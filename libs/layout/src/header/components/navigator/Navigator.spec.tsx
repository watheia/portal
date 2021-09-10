import { render } from "@testing-library/react"

import Navigator from "./Navigator"

describe("Navigator", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Navigator />)
    expect(baseElement).toBeTruthy()
  })
})
