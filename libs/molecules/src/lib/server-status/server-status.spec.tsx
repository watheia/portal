import { render } from "@testing-library/react"

import ServerStatus from "./server-status"

describe("ServerStatus", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ServerStatus />)
    expect(baseElement).toBeTruthy()
  })
})
