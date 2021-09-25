// import {
//   BreakpointProvider,
//   shouldKeepSpectrumClassNames,
//   useDOMRef,
//   useMatchedBreakpoints,
//   useStyleProps
// } from "@watheia/utils"
// import clsx from "clsx"
// import { DOMRef } from "@react-types/shared"
// import { filterDOMProps } from "@react-aria/utils"
// import { I18nProvider, useLocale } from "@react-aria/i18n"
// import { ModalProvider, useModalProvider } from "@react-aria/overlays"
// import { ProviderContext, ProviderProps } from "@react-types/provider"
// import React, { useContext, useEffect, useRef } from "react"
// import styles from "@watheia/theme.styles.page/vars.css"
// import typographyStyles from "@watheia/theme/styles/components/typography/index.css"
// import { useColorScheme, useScale } from "./mediaQueries"
// import { version } from "../package.json"

const Context = React.createContext<ProviderContext | null>(null)
Context.displayName = "ProviderContext"

const DEFAULT_BREAKPOINTS = { S: 640, M: 768, L: 1024, XL: 1280, XXL: 1536 }

/* eslint-disable-next-line */
export interface ThemeProps {}

export function Theme(props: ThemeProps) {
  return (
    <div>
      <h1>Welcome to Theme!</h1>
    </div>
  )
}

export default Theme
