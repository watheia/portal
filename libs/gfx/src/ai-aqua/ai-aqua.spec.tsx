import { render } from "@testing-library/react"

import WaCard from "./ai-aqua"

it("should render successfully", () => {
  const { baseElement } = render(<WaCard />)
  expect(baseElement).toBeTruthy()
})
