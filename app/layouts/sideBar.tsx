import Link from "next/link";
import React from "react";
import MobileMenu from "./mobileMenu";

interface MenuItem {
  id: number;
  href: string;
  title: string;
}

interface SideBarProps {
  sidebarToggle: boolean;
  close: () => void;
  menu: MenuItem[];
}

export default function SideBar({ sidebarToggle, close, menu }: SideBarProps) {
  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${sidebarToggle ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="assets/img/logo/logo.png" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close" onClick={() => close()}>
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3">
                <MobileMenu menu={menu} />
              </div>
              <p className="text d-none d-xl-block mb-5">
                Le Parti des peuples africains – Côte d'Ivoire (PPA-CI), fondé
                en 2021 par l'ancien président Laurent Gbagbo, défend des
                valeurs socialistes, panafricanistes et souverainistes. Cette
                nouvelle formation politique marque un tournant après son retour
                en Côte d'Ivoire.
              </p>
              <div className="offcanvas__contact">
                <h4>Nous contactez</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Abidjan
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@example.com">ppaci@gmail.com</a>
                    </div>
                  </li>
                  {/* <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Mod-friday, 09am -05pm
                      </a>
                    </div>
                  </li> */}
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+2250767655615">+225 07 67 65 56 15</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="#" className="theme-btn text-center">
                    Contacts
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${sidebarToggle ? "overlay-open" : ""}`}
        onClick={() => close()}
      />
    </>
  );
}
