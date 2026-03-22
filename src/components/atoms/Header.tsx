'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const navigation = [
  { name: 'About', href: '/' },
  { name: 'Note', href: 'https://note.com/ayata_taguchi' },
]

const Header: React.FC = () => {
  return (
    <Disclosure as="nav" className="bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 focus:outline-hidden focus:ring-2 focus:ring-white focus:ring-inset dark:text-gray-500 dark:focus:ring-gray-700 dark:hover:bg-gray-700">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="block h-6 w-6 group-data-[open]:hidden"
                aria-hidden="true"
              />
              <XMarkIcon
                className="hidden h-6 w-6 group-data-[open]:block"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <p className="text-gray-600 text-lg dark:text-gray-300">
                Adacchi3
              </p>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className="rounded-md px-3 py-2 font-medium text-gray-500 text-sm hover:bg-gray-200 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="block rounded-md px-3 py-2 font-medium text-base text-gray-500 hover:bg-gray-200 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Header
