import { render } from "@testing-library/react"

import Navbar from "./Navbar"
import navigation from "../../navigation"

describe("Navbar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Navbar navigation={navigation} />)
    expect(baseElement).toBeTruthy()
  })
})
