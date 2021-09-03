import { render } from "@testing-library/react"

import Watheia from "../watheia"

it("should render successfully", () => {
  const { baseElement } = render(<Watheia />)
  expect(baseElement).toBeTruthy()
})
