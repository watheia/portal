import clsx from "clsx"
import Navigator from "./components/navigator"
import { HeaderProps } from "./HeaderProps"

import styles from "./Header.module.css"

export const Header = ({
  className,
  userNavigation,
  navigation,
  user,
  ...props
}: HeaderProps) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <Navigator userNavigation={userNavigation} navigation={navigation} user={user} />
    </div>
  )
}

export default Header
