import { useEffect } from "react"
import "../assets/styles/index.css"
import "../assets/styles/chrome-bug.css"

import { TopLayout } from "@waweb/layout"
// import { UserContextProvider } from '../utils/useUser';
// const UserContextProvider = (props) => <div {...props} />

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove("loading")
  }, [])

  return (
    <TopLayout>
      <Component {...pageProps} />
    </TopLayout>
  )
}
