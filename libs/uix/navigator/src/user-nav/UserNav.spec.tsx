import { render } from "@testing-library/react"
import { user, userNavigation } from "@watheia/model"
import UserNav from "./UserNav"

describe("UserNav", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UserNav user={user} userNavigation={userNavigation} />)
    expect(baseElement).toBeTruthy()
  })
})
