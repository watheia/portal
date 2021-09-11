/* eslint-disable-next-line */
import React from "react"
import { SvgIconProps, PRIMARY_COLOR, SECONDARY_COLOR } from "@watheia/model"

export function DoorOpen({
  width,
  height,
  title = "door open",
  primaryColor = PRIMARY_COLOR,
  secondaryColor = SECONDARY_COLOR,
  ...props
}: SvgIconProps) {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{title}</title>
      <g
        fill={primaryColor}
        stroke={primaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <polygon fill="none" points="11 8 11 56 42 62 42 2 11 8" stroke={secondaryColor} />
        <polyline fill="none" points="48 57 53 57 53 7 48 7" />
        <polyline fill="none" points="36 42 36 35 34 35" />
      </g>
    </svg>
  )
}

export default DoorOpen
