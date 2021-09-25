import clsx from "clsx"

import { Facebook, Github, Instagram, Twitter } from "./icons"
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
      return <div />
  }
}

/**
 * Component to display the icon
 *
 * @param {Object} props
 */
const Icon = ({ iconClass, iconColor, className, ...rest }: IconProps): JSX.Element => {
  return <div>{renderIcon(iconClass)}</div>
}

export default Icon
