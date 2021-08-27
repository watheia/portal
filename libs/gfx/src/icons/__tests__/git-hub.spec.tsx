import { render } from "@testing-library/react"

import GitHub from "../git-hub"

describe("GitHub", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<GitHub />)
    expect(baseElement).toBeTruthy()
  })
})
