import { render } from "@testing-library/react"

import Dotbox from "../dotbox"

it("should render successfully", () => {
  const { baseElement } = render(<Dotbox />)
  expect(baseElement).toBeTruthy()
})
