import { render } from "@testing-library/react"

import Resources from "../pages/resources"

describe("Resources", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Resources />)
    expect(baseElement).toBeTruthy()
  })
})
