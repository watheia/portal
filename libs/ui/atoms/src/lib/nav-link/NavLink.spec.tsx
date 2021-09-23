import { render } from "@testing-library/react"
import { BaseLink, BaseLinkWithExternal } from "./NavLink.composition"

describe("Link Component", () => {
  it("should render correctly", () => {
    const { getByText } = render(<BaseLink />)
    const rendered = getByText("watheia.app")
    expect(rendered).toBeInstanceOf(HTMLElement)
  })
  it("should render with target blank", () => {
    const { getByTestId } = render(<BaseLinkWithExternal />)
    const rendered = getByTestId("test-link")

    expect(rendered.tagName).toEqual("A")
    expect(rendered.getAttribute("target")).toEqual("_blank")
  })
})
