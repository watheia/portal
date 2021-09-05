/**
 * Copyright 2021 Watheia Labs, LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles"
import { SSRProvider, OverlayProvider } from "react-aria"
import { NProgress, ResizeHandler } from "@waweb/utils"
import { useEffect } from "react"

import "@waweb/assets/styles/index.css"
import "@waweb/assets/styles/nprogress.css"
import "@waweb/assets/styles/chrome-bug.css"

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#04BFBF"
      },
      secondary: {
        main: "#024873"
      },
      common: {
        white: "#fefeff",
        black: "#110f10"
      }
    }
  })
)

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove("loading")
  }, [])
  return (
    <SSRProvider>
      <OverlayProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
        <ResizeHandler />
        <NProgress />
      </OverlayProvider>
    </SSRProvider>
  )
}
