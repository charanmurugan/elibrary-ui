import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Banner.scss";

function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="container h-100 d-flex align-items-center mt-md-0 mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <h1 className="h1-display">The Online </h1>
          <h1 className="h1-display"> Library</h1>
          <p className="pe-md-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <section className="banner-btns">
            <div>
              <button type="button" className="btn banner-btn-1 btn-lg ">
                Contact Us
              </button>
            </div>
            <div>
              <button type="button" className="btn banner-btn-2 btn-lg ">
                Materials
              </button>
            </div>
          </section>
        </div>
        <div className="col-12 col-md-6 mt-6 mt-md-0">
          <img
            src="/assets/bannerLogo.png"
            className="w-100 banner-image"
            alt="bannerImage"
            data-aos="fade-up"
            duration
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
