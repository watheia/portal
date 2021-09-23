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
