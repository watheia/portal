import { render } from "@testing-library/react"
import { navigation } from "@watheia/model"
import TabNav from "./TabNav"

describe("TabNav", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TabNav navigation={navigation} />)
    expect(baseElement).toBeTruthy()
  })
})
