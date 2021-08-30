import { render } from "@testing-library/react"

import Nprogress from "./nprogress"

describe("Nprogress", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Nprogress />)
    expect(baseElement).toBeTruthy()
  })
})
