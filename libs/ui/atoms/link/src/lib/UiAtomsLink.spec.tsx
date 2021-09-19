import { render } from "@testing-library/react"

import UiAtomsLink from "./UiAtomsLink"

describe("UiAtomsLink", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UiAtomsLink />)
    expect(baseElement).toBeTruthy()
  })
})
