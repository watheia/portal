import { render } from "@testing-library/react"

import ThemeDefault from "./ThemeDefault"

describe("ThemeDefault", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ThemeDefault />)
    expect(baseElement).toBeTruthy()
  })
})
