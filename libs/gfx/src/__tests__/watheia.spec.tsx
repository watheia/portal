import { render } from "@testing-library/react"

import Watheia from "../watheia"

describe("Watheia", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Watheia />)
    expect(baseElement).toBeTruthy()
  })
})
