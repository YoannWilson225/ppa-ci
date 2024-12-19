import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function AboutSection() {
  return (
    <>
      {/* About Section Start */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <ul
                    className="experience-text wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <li>17 octobre 2021</li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>Jusqu'à maintenant</li>
                  </ul>
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="about-image">
                        <img src="assets/img/about/01.jpg" alt="about-img" />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="about-image">
                        <img src="assets/img/about/02.jpg" alt="about-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      {/* <img src="assets/img/bale.png" alt="img" /> */}A
                      propos du PPACI
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Mot du président
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Sed ut perspiciatis unde omnis iste natus error sit volupta
                    temes accusantium doloremque laudantium, totam remerror sit volupta
                    temes accusantium doloremque laudantium, totam 
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      Connect with leads with zero hassle.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Take quick payments direct from meetings
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Start finding leads that get coverts quickly
                    </li>
                  </ul>
                  <div
                    className="about-author wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="about-button">
                      {/* <Link href="about" className="theme-btn">
                        En savoir plus
                        <i className="far fa-arrow-right" />
                      </Link> */}
                      <Button
                        type="submit"
                        className="h-12 w-32 bg-[#0078d4] hover:bg-black hover:text-white"
                        variant="default"
                      >
                        En savoir plus
                      </Button>
                    </div>
                    <div className="author-image">
                      <img src="assets/img/about/author.jpg" alt="author-img" />
                      <div className="content">
                        <h5>
                          Laurent Gbagbo. / <span>Fondateur du PPACI</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
