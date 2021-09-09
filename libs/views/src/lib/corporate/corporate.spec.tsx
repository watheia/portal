import { render } from "@testing-library/react"

import Corporate from "./corporate"

describe("Corporate", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Corporate />)
    expect(baseElement).toBeTruthy()
  })
})
