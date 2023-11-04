"use client";
import Link from "next/link"; // Import the Link component from Next.js
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import { Links } from "../constants/links";
import { IoMdPulse } from "react-icons/io";
import useMenuActive from "../hooks/useMenuActive";
import LinkItem from "./LinkItem";
import { useState } from "react";
import Profile from "./Profile";

const Navbar = () => {
    const token = false;
    const [login, setLogin] = useState(false); // Use useState correctly, as it returns an array

    return (
        <nav className="w-full py-5 dark:bg-dark">
            <div className="wrapper flex items-center justify-between">
                <Link href={"/"}> {/* Use Link to wrap anchor tags */}
                    <a className="flex gap-1 items-center">
                        <h1 className="font-bold text-gray-900 text-2xl dark:text-white">
                            TechBytes
                        </h1>
                        <IoMdPulse
                            className="text-3xl text-sky-400"
                            aria-hidden="true"
                        />
                    </a>
                </Link>

                <div className="flex gap-8 max-lg:gap-5 items-center flex-1 max-md:hidden text-gray-600 dark:text-white justify-center">
                    {Links.map((link, index) => {
                        const isActive = useMenuActive(link.route);
                        return (
                            <LinkItem
                                key={index}
                                route={link.route}
                                label={link.label}
                                isActive={isActive}
                            />
                        );
                    })}
                </div>
                <div className="flex-1 justify-end flex gap-3 items-center">
                    <ThemeToggle />
                    <MobileMenu />
                </div>
                <div
                    onClick={() => setLogin(!login)}
                    className=" w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] ml-4 cursor-pointer"
                >
                    {
                        token ? <img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="Profile Pic" /> : <Link href={'/login'}><img
                            className="object-cover object-center"
                            src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" alt="Profile Pic" /></Link>
                    }

                    {/* {
                        (!token && login) && <Profile />
                    }
                    {
                        (token && login) && <div className=""><Link href={'/profile'}><h4>Profile</h4></Link></div>
                    } */}
                    {/* <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
