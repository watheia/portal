import { render } from "@testing-library/react"

import ActionBar from "./action-bar"

describe("ActionBar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ActionBar />)
    expect(baseElement).toBeTruthy()
  })
})
