import { render } from "@testing-library/react"

import { Text } from "./typography"

describe("Text", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Text />)
    expect(baseElement).toBeTruthy()
  })
})
