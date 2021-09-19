import { render } from "@testing-library/react"

import UiMoleculesForm from "./UiMoleculesForm"

describe("UiMoleculesForm", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UiMoleculesForm />)
    expect(baseElement).toBeTruthy()
  })
})
