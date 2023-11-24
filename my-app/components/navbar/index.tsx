"use client"
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/public/logo/png/logo-grey-only-no-background.png"
import Image from "next/image";

const navigation = [
  { name: "Feed", href: "http://localhost:3000/home", current: true },
  { name: "Discover", href: "http://localhost:3000/home", current: false },
  // { name: "Shop", href: "http://localhost:3000/home", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-navbar">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="w-[105px] h-[25px]"
                    src=""
                    alt=""
                  /> */}
                  <Image src={logo} alt="logo" className="w-[20px]" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "font-poppins font-[500] text-[16px] text-[#fff] leading-[-.8px]"
                            : "font-poppins font-[500] text-[16px] text-[#fff] leading-[-.8px]",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div className="hidden sm:block">
                    <button className="btn font-[500] font-poppins text-[16px] leading-[-.18px] text-[#fff] bg-[#a039fc] rounded-[100px] w-[128px] h-[40px] mr-2 hover:bg-[#a039fc]">
                      <a href="http://localhost:3000/home">Create</a>
                    </button>
                    <button className="btn font-[500] font-poppins text-[16px] leading-[-.18px] text-[#fff] bg-navbar hover:bg-navbar border-none rounded-[100px] w-[128px] h-[40px]">
                      <a href="http://localhost:3000/home">Log In</a>
                    </button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? " text-white"
                      : "text-gray-300  hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Menu as="div" className="relative ml-3">
                <button className="btn font-[500] font-poppins text-[16px] leading-[-.18px] text-[#fff] bg-[#a039fc] rounded-[100px] w-[128px] h-[40px] mr-2 hover:bg-[#a039fc]">
                  Create
                </button>
                <button className="btn font-[500] font-poppins text-[16px] leading-[-.18px] text-[#fff] bg-navbar hover:bg-navbar border-none rounded-[100px] w-[128px] h-[40px]">
                  Log In
                </button>
              </Menu>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
