import { render } from "@testing-library/react"

import WatheiaAlt from "../watheia-alt"

it("should render successfully", () => {
  const { baseElement } = render(<WatheiaAlt />)
  expect(baseElement).toBeTruthy()
})
