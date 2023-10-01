import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MenuComponent = (props) => {
  const {title,items} = props
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  ring-gray-300 hover:bg-gray-50">
          {title}
          {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute -right-24 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 focus:outline-none">
        {items.map((link,i) => (
          /* Use the `active` state to conditionally style the active item. */
          <div key={i} className="py-1 text-center">
            <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <Link
                href={link.href}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-1 text-sm'
                )}
              >
                {link.label} 
              </Link>
            )}
          </Menu.Item>
          </div>
        ))}
      </Menu.Items>
      </Transition>
    </Menu>
  )
}


export default MenuComponent