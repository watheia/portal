import { HtmlHTMLAttributes } from "react"
import clsx from "clsx"
import styles from "./Text.module.css"

export type TextVariant = "primary" | "secondary" | "title" | "subtitle" | "body"

export type TextProps = {
  variant: TextVariant
} & HtmlHTMLAttributes<HTMLDivElement>

export function Text({ className, ...rest }: TextProps) {
  return <article className={clsx("prose", styles.text, className)} {...rest}></article>
}

export default Text
