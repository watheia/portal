import clsx from "clsx"
import NoSsr from "@material-ui/core/NoSsr"
import { IconProps } from "./IconProps"

/**
 * Component to display the icon
 *
 * @param {Object} props
 */
const Icon = ({
  fontIconClass,
  size = "small",
  fontIconColor,
  className,
  ...rest
}: IconProps): JSX.Element => {
  // const classes = useStyles();

  return (
    <NoSsr>
      <i
        className={clsx("icon", fontIconClass, size, className)}
        style={{ color: fontIconColor }}
        {...rest}
      />
    </NoSsr>
  )
}

export default Icon
