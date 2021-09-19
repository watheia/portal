import { render } from "@testing-library/react"

import UiAtomsDivider from "./UiAtomsDivider"

describe("UiAtomsDivider", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UiAtomsDivider />)
    expect(baseElement).toBeTruthy()
  })
})
