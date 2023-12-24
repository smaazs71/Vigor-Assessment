"use client";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const MyAccountComponent = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex flex-col">
        <Menu.Button className="inline-flex w-full justify-center">
          <div className="flex items-center justify-center space-x-1">
            <p>My Account</p>
            <Image
              src="/arrow-down.svg"
              alt="arrow-down"
              width={10}
              height={10}
            />
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 -ml-3 mt-12 min-w-48 p-2 rounded-md bg-white shadow-[0_0_5px_2px_rgba(0,0,0,0.07)] focus:outline-none">
            <Menu.Item>
              <div className="flex items-center justify-center space-x-2 p-2 m-auto">
                <Image
                  src="/purchase-history.svg"
                  alt="purchase history"
                  height={17}
                  width={17}
                />
                <Link className="w-full text-sm" href="#">
                  Purchase History
                </Link>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="flex items-center justify-center space-x-2 p-2 m-auto">
                <Image
                  src="/video-stream.svg"
                  alt="video stream"
                  height={17}
                  width={17}
                />
                <Link className="w-full text-sm" href="#">
                  Video Stream
                </Link>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="flex items-center justify-center space-x-2 p-2 m-auto">
                <Image
                  src="/notification.svg"
                  alt="notification"
                  height={17}
                  width={17}
                />
                <Link className="w-full text-sm" href="#">
                  Notifications
                </Link>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="flex items-center justify-center space-x-2 p-2 m-auto">
                <Image
                  src="/settings.svg"
                  alt="settings"
                  height={17}
                  width={17}
                />
                <Link className="w-full text-sm" href="#">
                  Settings
                </Link>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="flex items-center justify-center space-x-2 p-2 m-auto">
                <Image
                  src="/log-out.svg"
                  alt="log out"
                  height={17}
                  width={17}
                />
                <Link className="w-full text-sm" href="#">
                  Log out
                </Link>
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
};

export default MyAccountComponent;
