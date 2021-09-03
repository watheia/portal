import { render } from "@testing-library/react"

import Nprogress from "./nprogress"

it("should render successfully", () => {
  const { baseElement } = render(<Nprogress />)
  expect(baseElement).toBeTruthy()
})
