import { render } from "@testing-library/react"

import Dotbox from "../dotbox"

describe("Dotbox", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Dotbox />)
    expect(baseElement).toBeTruthy()
  })
})
