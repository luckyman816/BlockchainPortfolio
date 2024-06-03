"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import One from "@/public/images/banner/large-slider/one.png";
import Two from "@/public/images/banner/large-slider/two.png";
import Three from "@/public/images/banner/large-slider/three.png";
import Four from "@/public/images/banner/large-slider/four.png";
import Five from "@/public/images/banner/large-slider/five.png";
import Six from "@/public/images/banner/large-slider/six.png";
import SmOne from "@/public/images/banner/small-slider/one.png";
import SmTwo from "@/public/images/banner/small-slider/two.png";
import SmThree from "@/public/images/banner/small-slider/three.png";
import SmFour from "@/public/images/banner/small-slider/four.png";
import SmFive from "@/public/images/banner/small-slider/five.png";

import ThumbOne from "@/public/images/banner/banner-thumb-one.png";
import Frame from "@/public/images/frame-one.png";

const HomeBanner = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof window !== "undefined") {
      const deviceWidth = window.innerWidth;
      if (document.querySelector(".banner") && deviceWidth >= 768) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "top top",
            end: "+=40%",
            scrub: 1,
            pin: false,
          },
        });

        tl.to(".banner-thumb-one img", {
          transform: "rotate(14deg)",
          x: "300px",
          opacity: 1,
          duration: 3,
        });

        tl.to(".banner .banner-anime", {
          "--transformY": "300px",
          opacity: 0,
          duration: 3,
        });
      }
    }
  }, []);
  const sentence: string = "The greatest pleasure in life is doing what people say you cannot do."
  
  return (
    <section className="banner bg-img">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <div className="banner__content text-center">
              <h1 className="title-animation">
                {/* <span>The greatest pleasure in life is doing what people say you cannot do.</span> */}
                <span>{sentence}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        speed={5000}
        loop={true}
        centeredSlides={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
        }}
        className="banner__large-slider"
      >
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={One} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Two} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Three} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Four} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Five} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Six} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={One} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Two} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Three} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Four} alt="Image" priority />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        speed={20000}
        loop={true}
        centeredSlides={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: true,
        }}
        className="banner__small-slider"
      >
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmOne} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmTwo} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmThree} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmFour} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmFive} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmOne} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmTwo} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmThree} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmFour} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmFive} alt="Image" priority />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <Link className="scroll-position-btn" href="#scrollPosition">
        <Image src={Frame} alt="Image" priority />
        <i className="bi bi-arrow-down"></i>
      </Link> */}
    </section>
  );
};

export default HomeBanner;
