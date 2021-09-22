export interface Route {
  name: string
  href: string
  icon?: string
  children?: Route[]
}

export type Navigation = {
  user: Route[]
  primary: Route[]
  social: Route[]
}
