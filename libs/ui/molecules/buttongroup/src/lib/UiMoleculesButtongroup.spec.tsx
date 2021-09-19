import { render } from "@testing-library/react"

import UiMoleculesButtongroup from "./UiMoleculesButtongroup"

describe("UiMoleculesButtongroup", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UiMoleculesButtongroup />)
    expect(baseElement).toBeTruthy()
  })
})
