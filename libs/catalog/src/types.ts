import { HtmlHTMLAttributes, SVGProps } from "react"

export interface Post {
  id: number | string
  title: string
  href: string
  date: string
  datetime: string
  category: { name: string; href: string; color?: number | string }
  imageUrl?: string
  description: string
  author: {
    name: string
    imageUrl?: string
    href?: string
  }
  readingTime: string
}

/**
 *
 */
export type NavigationContext = {
  navigation: {
    user: Route[]
    primary: Route[]
    social: Route[]
  }
}

/**
 *
 */
export interface Route {
  name: string
  href: string
  icon?: string
  children?: Route[]
}

/**
 *
 */
export interface IAction {
  id: number | string
  name: string
  href: string
}

/**
 *
 */
export interface Listing extends IAction {
  icon?: any
  description?: string
  imageUrl?: string
}

export type AsyncStatus = "idle" | "pending" | "success" | "error"

/**
 * @deprecated
 */
export type ViewProps = HtmlHTMLAttributes<HTMLDivElement>

/**
 * @deprecated
 */
export type GraphicProps = SVGProps<SVGSVGElement>

export const color_scheme = {
  light: "light",
  dark: "dark"
}

/**
 * @deprecated
 */
export type ColorScheme = typeof color_scheme[keyof typeof color_scheme]

export interface Stat {
  label: string
  value: string | number
}

export interface Profile {
  id: string
  avatar_url: string
  username: string
  website: string
  updated_at: string
}

export interface Feature {
  id?: string | number
  name: string
  description: string
  icon?: any
}

export interface Post {
  id: number | string
  title: string
  href: string
  date: string
  datetime: string
  category: { name: string; href: string; color?: number | string }
  imageUrl?: string
  description: string
  author: {
    name: string
    imageUrl?: string
    href?: string
  }
  readingTime: string
}
