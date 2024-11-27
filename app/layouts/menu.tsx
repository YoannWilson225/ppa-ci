import Link from "next/link";
import React from "react";

interface MenuItem {
  id: number;
  href: string;
  title: string;
}

interface MenuProps {
  menu: MenuItem[];
}

export default function Menu({ menu }: MenuProps) {
  return (
    <>
      <nav id="mobile-menu" className="d-none d-xl-block">
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link href="/">
              Accueil
              {/* <i className="fas fa-angle-down" /> */}
            </Link>
            {/* <ul className="submenu has-homemenu">
              <li className="border-none">
                <div className="row g-4">
                  <div className="col-xl-2 homemenu">
                    <div className="homemenu-thumb">
                      <img src="assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/" className="theme-btn">
                          Multi Page
                        </Link>
                        <a href="index-one-page.html" className="theme-btn">
                          One Page
                        </a>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 01</h4>
                    </div>
                  </div>
                  <div className="col-xl-2  homemenu">
                    <div className="homemenu-thumb">
                      <img src="assets/img/header/home-2.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-2" className="theme-btn">
                          Multi Page
                        </Link>
                        <Link href="index-two-page" className="theme-btn">
                          One Page
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 02</h4>
                    </div>
                  </div>
                  <div className="col-xl-2 homemenu">
                    <div className="homemenu-thumb">
                      <img src="assets/img/header/home-3.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-3" className="theme-btn">
                          Multi Page
                        </Link>
                        <Link href="index-three-page" className="theme-btn">
                          One Page
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 03</h4>
                    </div>
                  </div>
                  <div className="col-xl-2 homemenu">
                    <div className="homemenu-thumb">
                      <img src="assets/img/header/home-4.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-4" className="theme-btn">
                          Multi Page
                        </Link>
                        <Link href="index-four-page" className="theme-btn">
                          One Page
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 04</h4>
                    </div>
                  </div>
                  <div className="col-xl-2 homemenu">
                    <div className="homemenu-thumb">
                      <img src="assets/img/header/home-5.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-5" className="theme-btn">
                          Multi Page
                        </Link>
                        <Link href="index-five-page" className="theme-btn">
                          One Page
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 05</h4>
                    </div>
                  </div>
                  <div className="col-xl-2 homemenu">
                    <div className="homemenu-thumb">
                      <img src="assets/img/header/home-6.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-6" className="theme-btn">
                          Multi Page
                        </Link>
                        <Link href="index-six-page" className="theme-btn">
                          One Page
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 06</h4>
                    </div>
                  </div>
                </div>
              </li>
            </ul> */}
          </li>
          {/* <li className="has-dropdown active d-xl-none">
            <Link href="/" className="border-none">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
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
            </ul>
          </li> */}
          {menu.map((menuItem) => (
            <li key={menuItem.id}>
              <a href={`#${menuItem.href}`}>{menuItem.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
