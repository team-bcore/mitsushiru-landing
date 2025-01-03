import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    (<div>
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <Link href="/">

                  <h1 className=" font-bold text-xl cursor-pointer">
                    密<span className="text-lime-500">ミツシル</span>
                  </h1>

                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* <Link
                    href="/"
                  >
                    <a className="cursor-pointer hover:bg-lime-500 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  </Link> */}
                  <Link
                    href="/usecase_1"
                    className="cursor-pointer hover:bg-primary text-teal-900 hover:text-white px-3 py-2 rounded-md text-base font-ud">
                    
                      病院での導入事例
                    
                  </Link>
                  <Link
                    href="/usecase_2"
                    className="cursor-pointer hover:bg-primary text-teal-900 hover:text-white px-3 py-2 rounded-md text-base font-ud">
                    
                      オフィスでの導入事例
                    
                  </Link>
                  <Link
                    href="/usecase_3"
                    className="cursor-pointer hover:bg-primary text-teal-900 hover:text-white px-3 py-2 rounded-md text-base font-ud">
                    
                      ホテル・大浴場での導入事例
                    
                  </Link>

                  <Link
                    href="/#contact-us"
                    className="cursor-pointer bg-primary text-teal-900 px-3 py-2 rounded-md text-base font-noto shadow-lg shadow-gray-300/50 hover:text-white">
                    
                      ミツシルを始める
                    
                  </Link>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-primary px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  href="/usecase_1"
                  className="font-ud cursor-pointer hover:bg-primary text-teal-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  
                    病院での導入事例
                  
                </Link>
                <Link
                  href="/usecase_2"
                  className="font-ud cursor-pointer hover:bg-primary text-teal-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  
                    オフィスでの導入事例
                  
                </Link>
                <Link
                  href="/usecase_3"
                  className="font-ud cursor-pointer hover:bg-primary text-teal-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  
                    ホテル・大浴場での導入事例
                  
                </Link>

                <Link
                  href="/#contact-us"
                  className="font-ud cursor-pointer hover:bg-primary text-teal-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  
                    ミツシルを始める
                  
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>)
  );
}

export default Navbar;
