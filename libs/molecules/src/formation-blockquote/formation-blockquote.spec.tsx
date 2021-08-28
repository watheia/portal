import { render } from "@testing-library/react"

import FormationBlockquote from "./formation-blockquote"

describe("FormationBlockquote", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FormationBlockquote />)
    expect(baseElement).toBeTruthy()
  })
})
