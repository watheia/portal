import { render } from "@testing-library/react"

import Link from "./link"

it("should render successfully", () => {
  const { baseElement } = render(<Link href="https://watheia.app" />)
  expect(baseElement).toBeTruthy()
})
