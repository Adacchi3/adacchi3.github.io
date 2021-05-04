import React from 'react'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'About', href: '/' },
  { name: 'Memo', href: '/' },
]

const Header: React.VFC = () => {
  return (
    <Disclosure as="nav" className="bg-gray-100">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-8 mx-auto max-w-7xl">
            <div className="flex relative justify-between items-center h-16">
              <div className="flex sm:hidden absolute inset-y-0 left-0 items-center">
                <Disclosure.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:bg-gray-200 rounded-md focus:ring-2 focus:ring-inset focus:ring-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 justify-center sm:justify-start items-center sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <p className="text-lg text-gray-600">Adacchi3</p>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link href={item.href} key={index}>
                        <a className="py-2 px-3 text-sm font-medium text-gray-500 hover:text-gray-600 hover:bg-gray-200 rounded-md">
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex absolute sm:static sm:inset-auto inset-y-0 right-0 items-center pr-2 sm:pr-0 sm:ml-6"></div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item, index) => (
                <Link href={item.href} key={index}>
                  <a className="block py-2 px-3 text-base font-medium text-gray-500 hover:text-gray-600 hover:bg-gray-200 rounded-md">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header
