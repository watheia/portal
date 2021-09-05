import clsx from "clsx"
import { Typography, IconButton } from "@mui/material"
import { ArrowRightAlt } from "@mui/icons-material"
import { LearnMoreLinkProps } from "./LearnMoreLinkProps"
import Link from "../link"

/**
 * Component to display the "Learn More" link
 *
 * @param {Object} props
 */
const LearnMoreLink = ({
  color,
  component = "a",
  variant = "subtitle1",
  title,
  href = "#",
  className,
  iconProps = {},
  typographyProps = {},
  ...rest
}: LearnMoreLinkProps): JSX.Element => {
  const children = (
    <>
      <Typography
        component="span"
        className={clsx("learn-more-link__title")}
        variant={variant}
        color={color || "primary"}
        {...typographyProps}
      >
        {title}
      </Typography>
      <IconButton
        className={clsx("learn-more-link__icon-button")}
        color={"primary"}
        {...iconProps}
      >
        <ArrowRightAlt className="learn-more-link__arrow" />
      </IconButton>
    </>
  )

  return (
    <Link href={href} className={clsx("learn-more-link", className)} {...rest}>
      {children}
    </Link>
  )
}

export default LearnMoreLink
