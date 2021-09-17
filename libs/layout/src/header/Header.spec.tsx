import { render } from "@testing-library/react"
import { navigation } from "@watheia/navigation"
import Header from "./Header"

describe("Header", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Header navigation={navigation} />)
    expect(baseElement).toBeTruthy()
  })
})