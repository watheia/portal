import { render } from "@testing-library/react"

import Dotscreen from "./dotscreen"

describe("Dotscreen", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Dotscreen />)
    expect(baseElement).toBeTruthy()
  })
})
