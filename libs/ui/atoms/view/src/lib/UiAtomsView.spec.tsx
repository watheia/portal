import { render } from "@testing-library/react"

import UiAtomsView from "./UiAtomsView"

describe("UiAtomsView", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UiAtomsView />)
    expect(baseElement).toBeTruthy()
  })
})
