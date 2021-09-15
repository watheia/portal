import { render } from "@testing-library/react"

import UiAtom from "./ui-atom"

describe("UiAtom", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UiAtom />)
    expect(baseElement).toBeTruthy()
  })
})
