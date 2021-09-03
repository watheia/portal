import { render } from "@testing-library/react"

import Page from "./page"

it("should render successfully", () => {
  const { baseElement } = render(<Page />)
  expect(baseElement).toBeTruthy()
})
