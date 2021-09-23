import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"
import clsx from "clsx"
import { Fragment, HtmlHTMLAttributes, ReactNode } from "react"

import styles from "./FlyoutMenu.module.css"

export type FlyoutMenuProps = {
  prompt?: string | ReactNode | ReactNode[] | null
} & HtmlHTMLAttributes<HTMLDivElement>

export function FlyoutMenu({ prompt, children, ...rest }: FlyoutMenuProps) {
  return (
    <Popover>
      {({ open }) => (
        <div {...rest}>
          <Popover.Button
            className={clsx({
              "text-primary": open,
              "text-primary-2": !open,
              [styles.menuButton]: true
            })}
          >
            <span>{prompt}</span>
            <ChevronDownIcon
              className={clsx({
                "text-shark-600": open,
                "text-shark-400": !open,
                [styles.chevron]: true
              })}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            {children}
          </Transition>
        </div>
      )}
    </Popover>
  )
}

export default FlyoutMenu
