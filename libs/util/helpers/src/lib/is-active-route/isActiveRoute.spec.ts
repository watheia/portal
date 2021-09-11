import { isActiveRoute } from "./isActiveRoute"

const INDEX = { name: "Index", href: "/" }

describe("@watheia/util.helpers.is-active-route", () => {
  it("MUST return tue only if route is active", () => {
    expect(isActiveRoute(INDEX, "/")).toBeTruthy()
    expect(isActiveRoute(INDEX, "/foo")).toBeFalsy()
  })
})
