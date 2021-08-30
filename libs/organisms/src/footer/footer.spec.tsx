import { render } from "@testing-library/react"
import { navigation } from "@waweb/dato"
import Footer from "./footer"

describe("Footer", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Footer navigation={navigation} />)
    expect(baseElement).toBeTruthy()
  })
})