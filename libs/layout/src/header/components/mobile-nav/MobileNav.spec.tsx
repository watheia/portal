import { Disclosure } from "@headlessui/react"
import { render } from "@testing-library/react"
import { navigation, userNavigation, user } from "@watheia/model"
import MobileNav from "./MobileNav"

const MockComponent = () => (
  <Disclosure as="nav">
    <MobileNav navigation={navigation} userNavigation={userNavigation} user={user} />
  </Disclosure>
)

describe("MobileNav", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MockComponent />)
    expect(baseElement).toBeTruthy()
  })
})
