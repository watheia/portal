import { act, renderHook } from "@testing-library/react-hooks"
import useDato from "./use-dato"

describe("useDato", () => {
  it("should render successfully", () => {
    const { result } = renderHook(() => useDato())

    expect(result.current.count).toBe(0)

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })
})
