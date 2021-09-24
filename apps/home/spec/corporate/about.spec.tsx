import { render } from "@testing-library/react"

import About from "../../pages/corporate/about"

describe("About", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<About />)
    expect(baseElement).toBeTruthy()
  })
})
