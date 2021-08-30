import { render } from "@testing-library/react"

import MockArticle from "./mock-article"

describe("MockArticle", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MockArticle />)
    expect(baseElement).toBeTruthy()
  })
})
