"use client";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { Menu, Disclosure, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Header = () => {
  const [user, setUser] = useState<Boolean>(false);

  return (
    <header id="header" className="">
      <div className="bg-white min-h-[86px] z-40 fixed w-[100%] top-0 left-0">
        <div className="m-auto w-[90%] p-[24px] items-center justify-between flex md:hidden">
          <Link href="/" className="flex">
            <Image src="/logo.svg" alt="logo" width={131} height={34} />
          </Link>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect width="32" height="32" fill="#173D7A" />
              <path
                d="M7 12H25"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M7 20H25"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="bg-white min-h-[86px] text-sm fixed items-center t-0 w-full p-0 m-0 hidden md:flex z-40"
        style={{ boxShadow: "0px 2px 8px #0000001f" }}
      >
        <Disclosure>
          {({ open }) => (
            <div className="w-full flex-col h-auto hidden md:flex">
              <div className="w-[90%] m-auto py-5 relative z-40">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex">
                    <Image src="/logo.svg" alt="logo" width={131} height={34} />
                  </Link>

                  <div className="flex space-x-[32px]">
                    <Link href="#">What's New</Link>
                    <Disclosure.Button className="relative flex items-center space-x-1">
                      <p> Knowledge Hub</p>
                      {open ? (
                        <Image
                          src="/arrow-up.svg"
                          alt="arrow-down"
                          width={10}
                          height={10}
                        />
                      ) : (
                        <Image
                          src="/arrow-down.svg"
                          alt="arrow-down"
                          width={10}
                          height={10}
                        />
                      )}
                      {open ? (
                        <Transition
                          show={open}
                          enter="transition delay-200 duration-200 ease-linear"
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
                    <Link href="#">CB News</Link>
                    <Link href="#">Internship</Link>
                    <Link href="#">About Us</Link>
                    {/* <Link href='/about'>Terms & Conditions</Link> */}
                  </div>
                  <div className="flex items-center justify-center space-x-[32px]">
                    {user ? (
                      // <Link href="#">Login</Link>
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
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
                    ) : (
                      // <div className="flex items-center justify-center space-x-1">
                      //   <p>My Account</p>
                      //   <Image
                      //     src="/arrow-down.svg"
                      //     alt="arrow-down"
                      //     width={10}
                      //     height={10}
                      //   />
                      // </div>
                      <div onClick={() => setUser(true)}>Login</div>
                    )}

                    <Link href="#">
                      <CustomButton
                        title="Register Now"
                        btnType="button"
                        containerStyles="px-[24px] py-[14px] bg-dark_blue rounded-3xl text-white flex items-center justify-center"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute w-full top-full ">
                <Transition
                  show={open}
                  enter="transition duration-500 ease-linear"
                  enterFrom="-translate-y-full"
                  enterTo="translate-y-0"
                  leave="transition duration-500 ease-linear"
                  leaveFrom="translate-y-0"
                  leaveTo="-translate-y-full"
                >
                  <Disclosure.Panel className="h-screen top-full">
                    <div
                      className="bg-white"
                      style={{ boxShadow: "0px 2px 0px #0000001f" }}
                    >
                      <Transition
                        className="w-[90%] h-full m-auto flex items-stretch justify-between gap-48 z-30"
                        show={open}
                        enter="transition duration-200 ease-linear"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-200 ease-linear"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <div className="flex flex-col items-center justify-between w-full max-w-64 space-y-5 m-6 gap-3">
                          <div className="text-3xl">
                            Join our registration list
                          </div>
                          <p className="text-body font-light">
                            And receive updates, expert educational insights,
                            and early access to our platform.
                          </p>
                          <div className="flex items-center justify-start space-x-2 ">
                            <CustomButton
                              title="Join"
                              btnType="button"
                              containerStyles="bg-dark_blue rounded-3xl text-white px-5 p-2"
                            />
                            <div className="rounded-3xl text-base border text-textColor hover:text-body hover:border-textColor hover:bg-textColor">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 36 36"
                                fill="none"
                              >
                                <path
                                  d="M35.5 18.0007C35.5 27.6655 27.6655 35.5 17.9993 35.5C8.33455 35.5 0.5 27.6642 0.5 18.0007C0.5 8.3345 8.33455 0.5 17.9993 0.5C27.6642 0.5 35.5 8.33584 35.5 18.0007Z"
                                  stroke="#ADB8C7"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M27.8718 23.1566V12.9895C27.8718 11.9178 26.9994 11.0454 25.9277 11.0454H9.89873C8.82696 11.0454 7.95459 11.9178 7.95459 12.9895V23.1566C7.95459 24.2284 8.82696 25.1008 9.89873 25.1008H25.9277C26.9994 25.1008 27.8718 24.2284 27.8718 23.1566ZM26.2732 23.1566C26.2732 23.347 26.118 23.5022 25.9277 23.5022H9.89873C9.70839 23.5022 9.55318 23.347 9.55318 23.1566V13.4541L17.4158 19.6977C17.562 19.8133 17.7376 19.8711 17.9132 19.8711C18.0888 19.8711 18.2655 19.8133 18.4106 19.6977L26.2732 13.4541V23.1566ZM17.9121 18.0516L24.7222 12.644H11.1019L17.9121 18.0516Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div className="rounded-3xl text-base border text-textColor hover:text-body hover:border-textColor hover:bg-textColor">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 36 36"
                                fill="none"
                              >
                                <path
                                  d="M35.5 18.0007C35.5 27.6655 27.6655 35.5 17.9993 35.5C8.33455 35.5 0.5 27.6642 0.5 18.0007C0.5 8.3345 8.33455 0.5 17.9993 0.5C27.6642 0.5 35.5 8.33584 35.5 18.0007Z"
                                  stroke="#ADB8C7"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M15.7079 27.8608H19.4156V19.3098H22.1529L22.7004 15.8561H19.4156V13.2445C19.4156 12.2754 20.3416 11.7279 21.2257 11.7279H22.8274V8.86357L19.963 8.73662C17.2245 8.56773 15.7079 10.7157 15.7079 13.2864V15.8561H12.5908V19.3098H15.7079V27.8608Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div className="rounded-3xl text-base border text-textColor hover:text-body hover:border-textColor hover:bg-textColor">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 36 36"
                                fill="none"
                              >
                                <path
                                  d="M35.5 18.0007C35.5 27.6654 27.6645 35.5 18 35.5C8.33554 35.5 0.5 27.6641 0.5 18.0007C0.5 8.33451 8.33425 0.5 18 0.5C27.6644 0.5 35.5 8.33583 35.5 18.0007Z"
                                  stroke="#ADB8C7"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12.0512 24.6633L13.3253 24.4354L14.1007 24.2994C15.1934 24.8911 16.3769 25.2108 17.6986 25.2108C23.6 25.2108 27.9302 18.3754 23.193 12.2031C17.0207 7.46474 10.1853 11.7961 10.1853 17.6975C10.1853 19.2006 10.641 20.5666 11.3688 21.75L11.2781 22.4335L11.0956 23.7995L10.9595 24.8469L12.0512 24.6644V24.6633ZM17.6975 8.72754C22.6603 8.72754 26.6663 12.7347 26.6663 17.6975C26.6663 22.6603 22.6603 26.6674 17.6975 26.6674C16.3315 26.6674 15.0563 26.3942 13.9182 25.8479L9.13676 26.6674L9.77496 21.9314L9.72848 21.8407C9.09142 20.6119 8.72754 19.2006 8.72754 17.6975C8.72754 12.7347 12.7347 8.72754 17.6975 8.72754ZM14.5099 13.5996C15.0121 13.2811 15.3306 13.5078 15.5131 14.0088L15.9688 15.1923C15.9688 15.1923 16.2873 15.8294 15.4666 16.4676C15.3317 16.5582 15.3317 16.5582 15.3759 16.7861C15.5584 17.3325 16.2862 18.9716 18.61 20.2469C18.8379 20.3829 18.8832 20.3829 19.1111 20.2015C19.2924 20.019 19.5203 19.7912 19.7016 19.6098C20.112 19.2459 20.3398 19.1088 20.7037 19.382C20.9769 19.5645 21.2512 19.7912 21.5233 19.9737C21.7965 20.2015 22.2522 20.4747 21.7965 21.0211L21.3861 21.5222C20.7955 22.251 20.2945 22.2964 19.5191 22.1139C16.5605 21.3397 14.375 19.2459 13.4183 16.2851C13.0997 15.147 13.5543 14.1902 14.511 13.5985L14.5099 13.5996Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div className="rounded-3xl text-base border text-textColor hover:text-body hover:border-textColor hover:bg-textColor">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 36 36"
                                fill="none"
                              >
                                <path
                                  d="M35.5 18.0007C35.5 27.6655 27.6655 35.5 17.9993 35.5C8.33455 35.5 0.5 27.6642 0.5 18.0007C0.5 8.3345 8.33455 0.5 17.9993 0.5C27.6655 0.5 35.5 8.33582 35.5 18.0007Z"
                                  stroke="#ADB8C7"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M18.5057 15.6059C17.7802 11.7804 22.381 9.50431 25.0924 12.2644C25.0924 12.2644 26.3029 11.9254 27.3684 11.2476C27.3684 11.2476 26.9807 12.5545 25.6727 13.3774C25.6727 13.3774 27.1258 13.1836 27.756 12.796C27.756 12.796 27.1258 14.1029 25.964 14.588C26.5942 23.3533 17.1511 28.6795 9.50122 24.3213C9.50122 24.3213 13.278 24.5151 14.8751 22.6754C14.8751 22.6754 12.5514 22.8693 11.3885 20.0605C11.3885 20.0605 12.2601 20.3994 13.1318 19.963C13.1318 19.963 10.4193 19.5278 10.1779 16.2826C10.1779 16.2826 11.0484 16.9604 12.0164 16.7178C12.0164 16.7178 9.01495 14.9258 10.7095 11.6817C10.7095 11.6817 13.906 15.7498 18.5057 15.6036V15.6059Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div className="rounded-3xl text-base border text-textColor hover:text-body hover:border-textColor hover:bg-textColor">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 36 36"
                                fill="none"
                              >
                                <path
                                  d="M35.5 18.0007C35.5 27.6655 27.6661 35.5 18.0007 35.5C8.33524 35.5 0.5 27.6641 0.5 18.0007C0.5 8.33454 8.33524 0.5 18.0007 0.5C27.6647 0.5 35.5 8.33581 35.5 18.0007Z"
                                  stroke="#ADB8C7"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M13.6203 10.2734H21.8161C23.6613 10.2734 25.1642 11.7752 25.1642 13.6206V21.7737C25.1642 23.6191 23.6624 25.1209 21.8161 25.1209H13.6203C11.7751 25.1209 10.2734 23.6191 10.2734 21.7737V13.6206C10.2734 11.7752 11.7751 10.2734 13.6203 10.2734ZM17.6973 14.4786H17.7403C19.4983 14.4786 20.9581 15.9374 20.9581 17.6966C20.9581 19.4988 19.4994 20.9576 17.7403 20.9576H17.6973C15.9371 20.9576 14.4783 19.4988 14.4783 17.6966C14.4783 15.9374 15.9371 14.4786 17.6973 14.4786ZM17.6973 12.8045H17.7403C20.4005 12.8045 22.6322 15.0363 22.6322 17.6966C22.6322 20.4 20.4005 22.5887 17.7403 22.5887H17.6973C15.0371 22.5887 12.8485 20.4011 12.8485 17.6966C12.8485 15.0363 15.0371 12.8045 17.6973 12.8045ZM22.5449 11.8603C23.1037 11.8603 23.5752 12.3329 23.5752 12.8906C23.5752 13.4483 23.1037 13.9198 22.5449 13.9198C21.9453 13.9198 21.5169 13.4483 21.5169 12.8906C21.5169 12.3329 21.9464 11.8603 22.5449 11.8603ZM13.5773 8.72729H21.8592C24.5193 8.72729 26.7079 10.9161 26.7079 13.5764V21.8157C26.7079 24.4771 24.5204 26.6647 21.8592 26.6647H13.5773C10.9171 26.6647 8.72852 24.476 8.72852 21.8157V13.5764C8.72852 10.9161 10.9171 8.72729 13.5773 8.72729Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="mr-12 rounded-[16px] business-card">
                          <Image
                            className="mr-12 rounded-[16px] scale-110"
                            src="/buisiness_card.png"
                            alt="img"
                            height={1440}
                            width={432}
                          />
                        </div>
                      </Transition>
                    </div>

                    <div className="backdrop m-0 p-0 w-full h-full bg-black opacity-20 z-20"></div>
                  </Disclosure.Panel>
                </Transition>
              </div>
            </div>
          )}
        </Disclosure>
      </div>
    </header>
  );
};

{
  /* <div className="w-96 font-extrabold size-32">Explore. Upskill. Elevate.</div>
<div className="card-panel">fadr</div> */
}
export default Header;
