import { render } from "@testing-library/react"

import Article from "./container"

it("should render successfully", () => {
  const { baseElement } = render(<Article />)
  expect(baseElement).toBeTruthy()
})