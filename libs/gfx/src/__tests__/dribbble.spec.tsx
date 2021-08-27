import { render } from "@testing-library/react"

import Dribbble from "../dribbble"

describe("Dribbble", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Dribbble />)
    expect(baseElement).toBeTruthy()
  })
})
