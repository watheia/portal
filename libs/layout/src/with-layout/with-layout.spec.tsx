import { render } from "@testing-library/react"

import WithLayout from "./with-layout"

it("should render successfully", () => {
  const { baseElement } = render(<WithLayout />)
  expect(baseElement).toBeTruthy()
})
