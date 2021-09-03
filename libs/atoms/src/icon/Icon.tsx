import clsx from "clsx"
import NoSsr from "@material-ui/core/NoSsr"
import { get } from "lodash"

import { Facebook, Github, Instagram, Twitter, WaCard } from "@waweb/gfx"
import React, { HtmlHTMLAttributes } from "react"

export type IconType = "facebook" | "instagram" | "twitter" | "github"

const icons: Record<string, any> = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  github: Github
}

export type IconProps = {
  iconClass: IconType
  /**
   * Color of the icon
   */
  iconColor?: string
} & HtmlHTMLAttributes<HTMLElement>

/**
 * Component to display the icon
 *
 * @param {Object} props
 */
const Icon = ({ iconClass, iconColor, className, ...rest }: IconProps): JSX.Element => {
  const Icon = get(icons, iconClass, null)

  return (
    <NoSsr>
      <Icon
        className={clsx("icon", iconClass, className)}
        style={{ color: iconColor }}
        {...rest}
      />
    </NoSsr>
  )
}

export default Icon
