import { render } from "@testing-library/react"

import StatusIndicator from "./status-indicator"

describe("StatusIndicator", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<StatusIndicator />)
    expect(baseElement).toBeTruthy()
  })
})
