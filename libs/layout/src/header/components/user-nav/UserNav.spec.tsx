import { render } from "@testing-library/react"

import UserNav from "./UserNav"

describe("UserNav", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UserNav />)
    expect(baseElement).toBeTruthy()
  })
})
