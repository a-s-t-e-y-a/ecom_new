import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MenuComponentNested = (props) => {
  const { title, items } = props;
  return (
    <Menu as="div" className=" inline-block text-left">
      <div className="flex items-center justify-center">
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2  text-sm  md:text-lg  font-semibold text-gray-900 shadow-sm  ring-gray-300 hover:bg-gray-50">
          {title}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
        <Menu.Items className=" absolute z-10  max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-full  w-fit flex gap-auto origin-top-left rounded-md bg-white shadow-lg ring-1 focus:outline-none">
          {items?.map((link, i) => (
            /* Use the `active` state to conditionally style the active item. */
            <div key={i} className="py-2 text-center flex">
              <Menu.Item key={link.href} as={Fragment} className="">
                {({ active }) => (
                    <div className="">
                      <p className="font-bold tracking-wide py-2">{link.label}</p>
                      {link?.subItems?.map((link, i) => (
                        <div key={i} className="py-1 text-center ">
                          <Menu.Item key={link.href} as={Fragment}>
                            {({ active }) => (
                              <Link
                                href={link.href}
                                className={classNames(
                                  active ? "bg-gray-200 text-gray-900" : "text-gray-700", "block px-4 py-1 text-sm" )}
                              >
                                {link.label}
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      ))}
                    </div>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuComponentNested;
