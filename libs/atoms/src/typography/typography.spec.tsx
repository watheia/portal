import { render } from "@testing-library/react"

import { Text } from "./typography"

it("should render successfully", () => {
  const { baseElement } = render(<Text />)
  expect(baseElement).toBeTruthy()
})
