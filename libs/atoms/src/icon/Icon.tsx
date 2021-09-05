import clsx from "clsx"
import { NoSsr } from "@mui/material"

import { Facebook, Github, Instagram, Twitter, WaCard } from "@waweb/gfx"
import React, { HtmlHTMLAttributes } from "react"

const icons: Record<string, any> = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  github: Github
}

export type IconProps = {
  iconClass: string
  /**
   * Color of the icon
   */
  iconColor?: string
} & HtmlHTMLAttributes<HTMLElement>

const renderIcon = (iconClass: string): JSX.Element => {
  switch (iconClass) {
    case "facebook":
      return <Facebook />
    case "instagram":
      return <Instagram />
    case "twitter":
      return <Twitter />
    case "github":
      return <Github />
    default:
      return <WaCard />
  }
}

/**
 * Component to display the icon
 *
 * @param {Object} props
 */
const Icon = ({ iconClass, iconColor, className, ...rest }: IconProps): JSX.Element => {
  return <NoSsr>{renderIcon(iconClass)}</NoSsr>
}

export default Icon
