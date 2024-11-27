"use client";

import Link from "next/link";
import React, { Fragment, useState } from "react";

interface MenuItem {
  id: number;
  href: string;
  title: string;
}

interface MobileMenuProps {
  menu: MenuItem[];
}

export default function MobileMenu({ menu }: MobileMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [multiMenu, setMultiMenu] = useState<string>("");

  const activeMenuSet = (value: string) =>
    setActiveMenu(activeMenu === value ? "" : value);

  const activeLi = (value: string) =>
    value === activeMenu ? { display: "block" } : { display: "none" };

  const multiMenuSet = (value: string) =>
    setMultiMenu(multiMenu === value ? "" : value);

  const multiMenuActiveLi = (value: string) =>
    value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <>
      <div className="mobile-menu fix mb-3 mean-container d-block d-xl-none">
        <div className="mean-bar">
          <nav className="mean-nav">
            <ul>
              <li className="has-dropdown active d-xl-none">
                <a
                  href="#"
                  className="border-none"
                  onClick={() => activeMenuSet("home")}
                >
                  Home
                  {/* <i className="fas fa-angle-down" /> */}
                </a>
                {/* <ul className="submenu" style={activeLi("home")}>
                  <li>
                    <Link href="/">Home 01</Link>
                  </li>
                  <li>
                    <Link href="index-2">Home 02</Link>
                  </li>
                  <li>
                    <Link href="index-3">Home 03</Link>
                  </li>
                  <li>
                    <Link href="index-4">Home 04</Link>
                  </li>
                  <li>
                    <Link href="index-5">Home 05</Link>
                  </li>
                  <li>
                    <Link href="index-6">Home 06</Link>
                  </li>
                </ul> */}
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("home")}
                >
                  <i className="far fa-plus" />
                </a>
              </li>
              <Fragment>
                {menu.map((menuItem) => (
                  <li key={menuItem.id}>
                    <a href={`#${menuItem.href}`}>{menuItem.title}</a>
                  </li>
                ))}
              </Fragment>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
