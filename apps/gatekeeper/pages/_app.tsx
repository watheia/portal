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

import { SSRProvider, OverlayProvider } from "react-aria"
import type { AppProps } from "next/app"
import { NProgress, ResizeHandler } from "@waweb/utils"
import { useEffect } from "react"

import "@waweb/assets/styles/index.css"
import "@waweb/assets/styles/nprogress.css"
import "@waweb/assets/styles/chrome-bug.css"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove("loading")
  }, [])
  return (
    <SSRProvider>
      <OverlayProvider>
        <Component {...pageProps} />
        <ResizeHandler />
        <NProgress />
      </OverlayProvider>
    </SSRProvider>
  )
}
