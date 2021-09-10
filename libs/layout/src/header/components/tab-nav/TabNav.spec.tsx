import { render } from "@testing-library/react"

import TabNav from "./TabNav"

describe("TabNav", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TabNav />)
    expect(baseElement).toBeTruthy()
  })
})
