import { render } from "@testing-library/react"

import WaCard from "./wa-card"

it("should render successfully", () => {
  const { baseElement } = render(<WaCard />)
  expect(baseElement).toBeTruthy()
})
