import { render } from "@testing-library/react"

import UiOrganismsLayout from "./UiOrganismsLayout"

describe("UiOrganismsLayout", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UiOrganismsLayout />)
    expect(baseElement).toBeTruthy()
  })
})
