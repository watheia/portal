import { render } from "@testing-library/react"

import WatheiaAlt from "../watheia-alt"

describe("WatheiaAlt", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<WatheiaAlt />)
    expect(baseElement).toBeTruthy()
  })
})
