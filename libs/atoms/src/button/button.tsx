import clsx from "clsx"
import React, { forwardRef, HTMLAttributes, useRef } from "react"
import mergeRefs from "react-merge-refs"
import s from "./button.module.scss"

import { LoadingDots } from "../loading-dots"

export type ButtonProps = {
  variant?: "flat" | "slim" | "cta" | "subtle"
  type?: "submit" | "reset" | "button"
  active?: boolean
  width?: number | string
  loading?: boolean
  disabled?: boolean
  Component?: "button"
} & HTMLAttributes<HTMLButtonElement>

const Button = forwardRef((props: ButtonProps, buttonRef): JSX.Element => {
  const {
    className,
    variant = "flat",
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    Component = "button",
    ...rest
  } = props
  const ref = useRef(null)
  const rootClassName = clsx(
    s.root,
    {
      [s.slim]: variant === "slim",
      [s.loading]: loading,
      [s.disabled]: disabled
    },
    className
  )

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      ref={mergeRefs([ref, buttonRef])}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style
      }}
      {...rest}
    >
      {children}
      {loading && (
        <i className="pl-2 m-0 flex">
          <LoadingDots />
        </i>
      )}
    </Component>
  )
})

export default Button
