import { render } from "@testing-library/react"

import Layout from "./layout"

const MockComponent = () => (
  <Layout>
    <h1>Hello, Layout!</h1>
  </Layout>
)
describe("Layout", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MockComponent />)
    expect(baseElement).toBeTruthy()
  })
})
