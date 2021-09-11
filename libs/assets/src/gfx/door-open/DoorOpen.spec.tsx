import { render } from "@testing-library/react"

import DoorOpen from "./DoorOpen"

describe("DoorOpen", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DoorOpen />)
    expect(baseElement).toBeTruthy()
  })
})
