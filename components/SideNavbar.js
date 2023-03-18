import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import ethLogo from '../assets/eth.png'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames';

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function handleSidebar() {
        setIsSidebarOpen((prev) => !prev);
    }


    return (
        <>
            <div className={`flex ${isSidebarOpen ? "hidden" : ""} z-40 items-center  fixed p-[1.33rem] transition-all duration-300 ease-in-out space-x-4 cursor-pointer`} onClick={handleSidebar}>
                <Image src={ethLogo} alt='eth logo' height={40} width={40} />
            </div>
            {
                isSidebarOpen ?
                    <div className="h-full p-3 space-y-2 w-60 fixed bg-[#181319] dark:text-gray-100 transition-all duration-300 ease-in-out z-40">
                        <div className="flex items-center p-2 space-x-4">
                            <Image className={"cursor-pointer"} src={ethLogo} alt='eth logo' height={40} width={40} onClick={handleSidebar} />
                            <div>
                                <h2 className="text-lg font-semibold">DEX Nav</h2>
                                <span className="flex items-center space-x-1">
                                    <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Select Items</Link>
                                </span>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-700">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                <li className=" hover:bg-[#2172E5] dark:text-gray-50">
                                    <Link href="/home" className="flex items-center p-2 space-x-3 rounded-md">
                                        <span>

                                            Home
                                        </span>
                                    </Link>
                                </li>
                                <li className=" hover:bg-[#2172E5] dark:text-gray-50">
                                    <Link href="/Trade" className="flex items-center p-2 space-x-3 rounded-md">
                                        <span>Trade</span>
                                    </Link>
                                </li>
                                <li className=" hover:bg-[#2172E5] dark:text-gray-50">
                                    <Link href="/Bridge" className="flex items-center p-2 space-x-3 rounded-md">
                                        <span>Bridge</span>
                                    </Link>
                                </li>
                                <li className=" hover:bg-[#2172E5] dark:text-gray-50">
                                    <Link href="/Wallet" className="flex items-center p-2 space-x-3 rounded-md">
                                        <span>Wallet</span>
                                    </Link>
                                </li>


                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                            BitgertPad
                                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-55 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="/Create_presale"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Create Presale
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="/Presale"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Presale Directory
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="/Airdrop"
                                                            className={classNames(
                                                                active ? 'bg-black-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Airdrop
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="/Airdrop_directory"
                                                            className={classNames(
                                                                active ? 'bg-black-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Airdrop Directory
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="/Create_locker"
                                                            className={classNames(
                                                                active ? 'bg-black-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Lock Tokens
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="/Lockers"
                                                            className={classNames(
                                                                active ? 'bg-black-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Lockers
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="/Create_token"
                                                            className={classNames(
                                                                active ? 'bg-black-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Create Token
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="/Farms"
                                                            className={classNames(
                                                                active ? 'bg-black-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Farms
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="/Stacking_pools"
                                                            className={classNames(
                                                                active ? 'bg-black-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Staking Pools
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                {/* <form method="POST" action="#">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                type="submit"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block w-full px-4 py-2 text-left text-sm'
                                                                )}
                                                            >
                                                                Airdrop Directory
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </form> */}
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                                {/* <li className=" hover:bg-[#2172E5] dark:text-gray-50">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Settings</span>
                                </Link>
                            </li> */}
                                {/* <li className=" hover:bg-[#2172E5] dark:text-gray-50">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Logout</span>
                                </Link>
                            </li> */}
                            </ul>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}

export default Header;