export interface Route {
  name: string
  href: string
  icon?: string
  children?: Route[]
}

export type NavigationContext = {
  navigation: {
    user: Route[]
    primary: Route[]
    social: Route[]
  }
}
