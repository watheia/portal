import { render } from "@testing-library/react"

import Instagram from "../instagram"

describe("Instagram", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Instagram />)
    expect(baseElement).toBeTruthy()
  })
})
