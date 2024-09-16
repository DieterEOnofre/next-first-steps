import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "../active-link/ActiveLink";

// const temporalAsync = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, 2000);
//   });
// };

const navItems = [
  { path: "/about", label: "About" },
  { path: "/pricing", label: "Pricing" },
  { path: "/contact", label: "Contact" },
];

export const Navbar = async () => {
  // await temporalAsync();
  return (
    <nav className="flex bg-blue-400 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="items-center">
        <HomeIcon className="mx-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>

      {navItems.map((item) => (
        <ActiveLink key={item.path} {...item} />
      ))}
    </nav>
  );
};
