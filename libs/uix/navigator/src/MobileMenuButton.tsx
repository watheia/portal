import { Disclosure } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

export const MobileMenuButton = ({ isOpen }: { isOpen?: boolean }) => (
  <Disclosure.Button className="bg-shark-700 inline-flex items-center justify-center p-2 rounded-md text-shark-400 hover:text-shark-50 hover:bg-shark-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-shark-800 focus:ring-white">
    <span className="sr-only">Open main menu</span>
    {isOpen ? (
      <XIcon className="block h-6 w-6" aria-hidden="true" />
    ) : (
      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
    )}
  </Disclosure.Button>
)

export default MobileMenuButton
