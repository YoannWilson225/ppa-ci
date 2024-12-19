import Link from "next/link";
import React from "react";

export default function Services() {
  return (
    <section className="service-section fix pt-80 pb-80 section-bg">
      <div className="container">
        <h4
          className="mb-5 text-white text-center wow fadeInUp"
          data-wow-delay=".3s"
        >
          Preparing For Your Business Success With IT Solution
        </h4>
        <div className="row g-4">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-items">
              <div className="content">
                <p>01</p>
                <h5>
                  <Link href="service-details">
                    Data Manage &amp; <br />
                    Solutions Center
                  </Link>
                </h5>
                <Link className="arrow-btn" href="service-details">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
              <div className="thumb">
                <img src="assets/img/service/01.jpg" alt="img" />
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="service-items">
              <div className="content">
                <p>02</p>
                <h5>
                  <Link href="service-details">
                    Preparing For <br />
                    Cloud Services
                  </Link>
                </h5>
                <Link className="arrow-btn" href="service-details">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
              <div className="thumb">
                <img src="assets/img/service/02.jpg" alt="img" />
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-items">
              <div className="content">
                <p>03</p>
                <h5>
                  <Link href="service-details">
                    Machine Learning <br />
                    &amp; Development
                  </Link>
                </h5>
                <Link className="arrow-btn" href="service-details">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
              <div className="thumb">
                <img src="assets/img/service/03.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
