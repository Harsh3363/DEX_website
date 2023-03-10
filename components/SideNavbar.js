import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import ethLogo from '../assets/eth.png'

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    function handleSidebar() {
      setIsSidebarOpen((prev) => !prev);
    }

  
    return (
      <>
        <div className={`flex ${isSidebarOpen?"hidden":""} z-40 items-center fixed p-[1.33rem] transition-all duration-300 ease-in-out space-x-4 cursor-pointer`} onClick={handleSidebar}>
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
                                <Link  href="/home" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className=" hover:bg-[#2172E5] dark:text-gray-50">
                                <Link  href="/Trade" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Trade</span>
                                </Link>
                            </li>
                            <li className=" hover:bg-[#2172E5] dark:text-gray-50">
                                <Link href="/Bridge" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Bridge</span>
                                </Link>
                            </li>
                            <li className=" hover:bg-[#2172E5] dark:text-gray-50">
                                <Link  href="/Wallet" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Wallet</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="pt-4 pb-2 space-y-1 text-sm">
                            <li className=" hover:bg-[#2172E5] dark:text-gray-50">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Settings</span>
                                </Link>
                            </li>
                            <li className=" hover:bg-[#2172E5] dark:text-gray-50">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
          </div>
          : null
        }
      </>
    )
  }

  export default Header;