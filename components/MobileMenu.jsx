import Link from "next/link";
import { Links } from "../constants/links";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const MobileMenu = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const mobileMenuHandler = () => {
        setOpenMobileMenu(!openMobileMenu);
    };

    return (
        <>
            <label className="swap swap-rotate md:hidden">
                <input
                    type="checkbox"
                    checked={openMobileMenu}
                    onChange={mobileMenuHandler}
                />
                <HiMenu className={`dark:text-white swap-on fill-current w-6 h-6 ${openMobileMenu ? 'hidden' : ''}`} />
                <MdOutlineClose className={`dark:text-white swap-off fill-current w-6 h-6 ${openMobileMenu ? '' : 'hidden'}`} />
            </label>

            {openMobileMenu && (
                <div className="mobile-menu">
                    {Links.map((link, index) => (
                        <Link key={index} href={link.route}>
                            <a>{link.label}</a>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default MobileMenu;
