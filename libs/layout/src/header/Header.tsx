import clsx from "clsx"
import Navigator from "@watheia/uix.navigator"
import { NavCtx, DivProps } from "@watheia/model"

import styles from "./Header.module.css"

export type HeaderProps = NavCtx & DivProps

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
