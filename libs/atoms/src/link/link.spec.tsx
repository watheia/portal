import { render } from "@testing-library/react"

import Link from "./link"

it("should render successfully", () => {
  const { baseElement } = render(<Link />)
  expect(baseElement).toBeTruthy()
})
