import { render } from "@testing-library/react"

import ResizeHandler from "./resize-handler"

it("should render successfully", () => {
  const { baseElement } = render(<ResizeHandler />)
  expect(baseElement).toBeTruthy()
})
