import { render } from "@testing-library/react"

import TabNav from "./TabNav"
import { primary } from "../../navigation/primary"

describe("TabNav", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TabNav routes={primary} activeRoute="/home" />)
    expect(baseElement).toBeTruthy()
  })
})
