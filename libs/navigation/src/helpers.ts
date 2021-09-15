import { Route } from "./types"

export const DEFAULT_AVATAR = "https://cdn.watheia.org/assets/icon.png"

export const DEFAULT_USER_NAME = "Guest"
/**
 * Returns true if item.href starts with activeRoute, provided that route
 * is not equal to "/"
 *
 * @param item
 * @param activeRoute
 * @returns
 */
export const isActiveRoute = (item: Route, activeRoute: string) => {
  //short circuit for efficiency
  if (
    item.href === "" ||
    item.href === "#" ||
    item.href.startsWith("http://") ||
    item.href.startsWith("https://")
  ) {
    return false
  }

  return (
    (activeRoute === "/" && item.href === "/") ||
    (item.href !== "/" && activeRoute.startsWith(item.href))
  )
}
