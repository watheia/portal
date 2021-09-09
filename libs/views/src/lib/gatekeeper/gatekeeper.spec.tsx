import { render } from "@testing-library/react"

import Gatekeeper from "./gatekeeper"

describe("Gatekeeper", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Gatekeeper />)
    expect(baseElement).toBeTruthy()
  })
})
