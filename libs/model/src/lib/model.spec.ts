import { user } from "./model"

describe("@watheia/model.user", () => {
  it("MUST export default user", () => {
    expect(user.name).toEqual("Guest")
  })
})
