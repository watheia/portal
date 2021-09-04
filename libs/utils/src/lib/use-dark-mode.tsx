import { useEffect, useState } from "react"
import { ColorScheme } from "@waweb/model"
import AOS from "aos"

const usePalette = () => {
  const [colorScheme, setTheme] = useState<ColorScheme>("light")
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = (mode: ColorScheme) => {
    window.localStorage.setItem("colorScheme", mode)
    setTheme(mode)
  }

  const themeToggler = () => {
    colorScheme === "light" ? setMode("dark") : setMode("light")
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("colorScheme") as ColorScheme
    localTheme ? setTheme(localTheme) : setMode("light")
    setMountedComponent(true)
    AOS.refresh()
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [colorScheme])

  return [colorScheme, themeToggler, mountedComponent]
}

export default usePalette
