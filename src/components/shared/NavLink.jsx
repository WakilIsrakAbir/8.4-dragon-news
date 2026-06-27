"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({href, children}) => {
    const pathname = usePathname();
    // console.log(pathname);
    const isActive = href === pathname
  return (
    <Link href={href} className={`${isActive && "text-green-500 font-bold border-b border-green-500"}`}>{children}</Link>
  )
};

export default NavLink;