import { PreviewRuntime } from "@teambit/preview"
import { ReactAspect, ReactPreview } from "@teambit/react"

import { TailwindReactAspect } from "./tailwind-react.aspect"

// load tailwind global custom styles, for compositions
import "@watheia/app.theme.tailwind-styles/dist/styles.css"

export class TailwindReactPreview {
  static runtime = PreviewRuntime
  static dependencies = [ReactAspect]

  static async provider([react]: [ReactPreview]) {
    const reactEnvPreview = new TailwindReactPreview()

    const previewDecorators: any[] = [
      /* add preview providers here */
    ]
    react.registerProvider(previewDecorators)

    return reactEnvPreview
  }
}

TailwindReactAspect.addRuntime(TailwindReactPreview)
