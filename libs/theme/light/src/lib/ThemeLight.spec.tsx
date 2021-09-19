import { render } from "@testing-library/react"

import ThemeLight from "./ThemeLight"

describe("ThemeLight", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ThemeLight />)
    expect(baseElement).toBeTruthy()
  })
})
