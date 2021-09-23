import { Popover } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import clsx from "clsx"
import { HtmlHTMLAttributes } from "react"

export type DropdownProps = {
  open?: boolean
} & HtmlHTMLAttributes<HTMLButtonElement>

export const NavDropdown = ({ children, open = false, ...rest }: DropdownProps) => (
  <Popover.Button
    className={clsx(
      open ? "text-secondary" : "text-secondary-2",
      "group bg-opacity-50 rounded-md inline-flex items-center font-medium hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-500"
    )}
    {...rest}
  >
    <span>{children}</span>
    <ChevronDownIcon
      className={clsx(
        open ? "text-shark-200" : "text-shark-300",
        "ml-2 h-5 w-5 group-hover:text-shark-50"
      )}
      aria-hidden="true"
    />
  </Popover.Button>
)
