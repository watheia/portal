import { render } from "@testing-library/react"

import CardBlockquote from "./card-blockquote"

describe("CardBlockquote", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CardBlockquote />)
    expect(baseElement).toBeTruthy()
  })
})
