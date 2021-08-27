import React from "react"
import clsx from "clsx"
import { Typography } from "@material-ui/core"
import Icon from "../icon"
import { IconTextProps } from "./IconTextProps"

/**
 * Component to display the icon text
 *
 * @param {Object} props
 */
const IconText = ({
  title,
  color,
  fontIconClass,
  className,
  iconProps = {},
  typographyProps = {},
  ...rest
}: IconTextProps): JSX.Element => {
  // const classes = useStyles()

  return (
    <div className={clsx("icon-text", className)} {...rest}>
      <Icon
        className="icon-text__icon"
        size="small"
        fontIconClass={fontIconClass}
        fontIconColor={color}
        {...iconProps}
      />
      <Typography
        noWrap
        variant="subtitle1"
        color="textPrimary"
        className={clsx("icon-text__typography")}
        {...typographyProps}
      >
        {title}
      </Typography>
    </div>
  )
}

export default IconText
