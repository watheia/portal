import React from "react"

// make sure to update the static storage when updating clean-font.css

export const staticSansFontClass = "Adobe Clean"
export const staticSerifFontClass = "Adobe Clean Serif"
export const staticCleanFontUrl = "https://cdn.watheia.org/assets/typography.css"

/** add this link tag to your `<head/>` to include the font. You can use class `.adobe-clean` to apply it */
export function StaticCleanFont(props: React.LinkHTMLAttributes<HTMLLinkElement>) {
  return <link rel="prefetch" {...props} href={staticCleanFontUrl} />
}
