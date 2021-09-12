import { act, renderHook } from "@testing-library/react-hooks"
import useAsync from "./useAsync"

describe("useAsync", () => {
  it("should render successfully", () => {
    const { result } = renderHook(() => useAsync())

    expect(result.current.count).toBe(0)

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })
})
