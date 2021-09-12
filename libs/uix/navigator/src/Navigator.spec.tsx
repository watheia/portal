import { render } from "@testing-library/react"
import { navigation, userNavigation, user } from "@watheia/model"
import Navigator from "./Navigator"

describe("Navigator", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Navigator navigation={navigation} userNavigation={userNavigation} user={user} />
    )
    expect(baseElement).toBeTruthy()
  })
})
