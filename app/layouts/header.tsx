"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import SideBar from "./sideBar";
import Menu from "./menu";
import { nextUtility } from "@/utility";

export default function Header() {
  useEffect(() => {
    nextUtility.stickyNav();
  }, []);

  const singleMenu = [
    { id: 1, href: "about", title: "About" },
    { id: 2, href: "services", title: "Services" },
    { id: 3, href: "team", title: "Team" },
    { id: 4, href: "blog", title: "Blog" },
  ];
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <>
      <header id="header-sticky" className="header-1">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img
                    src="assets/img/logo/logo.png"
                    alt="logo-img"
                    className="logo-1"
                  />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu menu={singleMenu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="icon-items">
                  {/* <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="content">
                    <p>Make A Call</p>
                    <h4>
                      <a href="tel:+00012345688">+000 (123) 456 88</a>
                    </h4>
                  </div> */}
                </div>
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SideBar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        menu={singleMenu}
      />
    </>
  );
}
