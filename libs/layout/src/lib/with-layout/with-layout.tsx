import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { useColorScheme } from "@waweb/theme"

import AOS from "aos"

interface Props {
  layout: any
  component: any
  // All other props
  [x: string]: any
}

export default function WithLayout({
  component: Component,
  layout: Layout,
  ...rest
}: Props): JSX.Element {
  const [colorScheme, themeToggler, mountedComponent] = useColorScheme()

  if (!mountedComponent) return <div />

  return (
    <Layout colorScheme={colorScheme} themeToggler={themeToggler}>
      <Component colorScheme={colorScheme} {...rest} />
    </Layout>
  )
}
