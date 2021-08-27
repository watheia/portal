import { LoginRequest } from "./model"

describe("model", () => {
  it("LoginRequest", () => {
    expect(new LoginRequest("secret").token).toEqual("secret")
  })
})
