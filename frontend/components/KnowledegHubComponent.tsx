"use client";
import { Disclosure, Transition } from "@headlessui/react";
import Image from "next/image";
import React from "react";

interface KnowledegHubComponentProps {
  open: boolean;
}

const KnowledegHubComponent = ({ open }: KnowledegHubComponentProps) => {
  return (
    <Disclosure.Button className="relative flex items-center space-x-1">
      <p> Knowledge Hub</p>
      {open ? (
        <Image src="/arrow-up.svg" alt="arrow-down" width={10} height={10} />
      ) : (
        <Image src="/arrow-down.svg" alt="arrow-down" width={10} height={10} />
      )}
      {open ? (
        <Transition
          show={open}
          enter="transition delay-500 duration-1000 ease-linear"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-200 ease-linear"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <ol className="absolute top-0 left-0 mt-10 flex min-w-36 flex-col items-start pl-3 m-2 gap-3 list-disc list-inside text-dark_blue">
            <li>Masterclass</li>
            <li>Webinar</li>
            <li>CB Connect</li>
            <li>Blogs</li>
          </ol>
        </Transition>
      ) : (
        ""
      )}
    </Disclosure.Button>
  );
};

export default KnowledegHubComponent;
