import React from "react"
import { UserContextProvider } from "../hooks/authUser"

import "@waweb/assets.styles/index.css"
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={"dark"}>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </div>
  )
}
