import { render } from "@testing-library/react"

import FlyoutMenu from "./FlyoutMenu"

describe("FlyoutMenu", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FlyoutMenu />)
    expect(baseElement).toBeTruthy()
  })
})
