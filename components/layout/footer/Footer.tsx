/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { FaDiscord, FaTelegram, FaWhatsapp, FaSkype, FaLinkedin  } from "react-icons/fa";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const deviceWidth = window.innerWidth;

    if (document.querySelector(".footer") && deviceWidth >= 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer",
          start: "top center",
          end: "+=40%",
          scrub: 0.5,
          pin: false,
        },
      });

      tl.to(".footer__content .light-title span", {
        "--opacity": 1,
        "--transformY": 0,
        duration: 3,
        ease: "power1.inOut",
      });

      tl.to(".footer-thumb-one img", {
        transform: "rotate(-24deg)",
        x: "0px",
        opacity: 1,
        duration: 3,
        ease: "power1.inOut",
      });

      tl.to(".footer-thumb-two img", {
        y: "0px",
        opacity: 1,
        duration: 3,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center section gap-5">
          <div className="col-12 col-md-9 col-lg-9 col-xl-10 col-xxl-9">
            <div className="footer__content text-center">
              <h2 className="light-title fw-7 title-animation">
                Let’s take a journey of Web3 with me.
              </h2>
            </div>
          </div>
          <div className="footer__content text-center">
            Petaling Jaya, Selangor, Citizen of Malaysia
          </div>
          <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', gap: "20px" }}>
            <div className="footer__content text-center" >
              <FaDiscord style={{width:  "30px", height: "27px"}}/>
            </div>
            <div className="footer__content text-center">
              <FaTelegram style={{width:  "30px", height: "27px"}}/>
            </div>
            <div className="footer__content text-center">
            <FaWhatsapp style={{width:  "30px", height: "27px"}}/>
            </div>
            <div className="footer__content text-center">
            <FaSkype style={{width:  "30px", height: "27px"}}/>
            </div>
            <div className="footer__content text-center">
            <FaLinkedin style={{width:  "30px", height: "27px"}}/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="footer__copyright-content text-center text-lg-start">
                    <p>
                      Copyright &copy;{" "}
                      <span id="copyrightYear">{currentYear}</span>{" "}
                      <Link href="/">John Rashid</Link>. All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
