import { render } from "@testing-library/react"

import Careers from "../../pages/corporate/careers"

describe("Careers", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Careers />)
    expect(baseElement).toBeTruthy()
  })
})
