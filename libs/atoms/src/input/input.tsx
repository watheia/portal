import React, { ChangeEvent, HTMLAttributes } from "react"
import clsx from "clsx"
import s from "./input.module.css"

export type InputProps = HTMLAttributes<HTMLInputElement>
const Input = (props: InputProps) => {
  const { className, children, onChange, ...rest } = props

  const rootClassName = clsx(s.root, {}, className)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
    return null
  }

  return (
    <label>
      <input
        className={rootClassName}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </label>
  )
}

export default Input
