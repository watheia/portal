import { render } from "@testing-library/react"

import ThemeDark from "./ThemeDark"

describe("ThemeDark", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ThemeDark />)
    expect(baseElement).toBeTruthy()
  })
})
