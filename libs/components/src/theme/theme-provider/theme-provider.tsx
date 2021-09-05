import React from "react"
import clsx from "clsx"

import { headingFontSize, textFontSize } from "@watheia/app.theme.size-definition"
import { shadowTheme } from "@watheia/app.theme.shadow-definition"
import { primaryPalette } from "@watheia/app.theme.color-definition"
import { brands } from "@watheia/app.theme.brand-definition"
import { headingMargins } from "@watheia/app.theme.heading-margin-definition"
import { sansFont } from "@watheia/app.theme.fonts.clean"
import texts from "./texts.module.scss"

/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.
 *
 * @example
 * <Theme>
 *  <Paragraph>I got all the base styles! yippee!</Paragraph>
 * </Theme>
 */

export function Theme(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={clsx(
        headingFontSize,
        textFontSize,
        sansFont,
        shadowTheme,
        primaryPalette,
        brands,
        headingMargins,
        texts.defaults,
        props.className
      )}
    ></div>
  )
}
