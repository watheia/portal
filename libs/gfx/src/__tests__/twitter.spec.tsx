import { render } from "@testing-library/react"

import Twitter from "../twitter"

it("should render successfully", () => {
  const { baseElement } = render(<Twitter />)
  expect(baseElement).toBeTruthy()
})
