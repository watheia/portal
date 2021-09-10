import { render } from "@testing-library/react"
import { navigation, userNavigation, user } from "@watheia/model"
import Header from "./Header"

describe("Header", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Header user={user} userNavigation={userNavigation} navigation={navigation} />
    )
    expect(baseElement).toBeTruthy()
  })
})
