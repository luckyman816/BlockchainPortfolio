"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import One from "@/public/images/partner/Group-1.svg";
import Two from "@/public/images/partner/Group-2.svg";
import Three from "@/public/images/partner/Group-3.svg";
import Four from "@/public/images/partner/Group-4.svg";
import Five from "@/public/images/partner/Group-5.svg";
import Six from "@/public/images/partner/Group-6.svg";
import Seven from "@/public/images/partner/Group-7.svg";
import Eight from "@/public/images/partner/Group-8.svg";
import Nine from "@/public/images/partner/Group-9.svg";

import Ten from "@/public/images/partner/Group-10.svg";
import Eleven from "@/public/images/partner/Group-11.svg";
import Twelve from "@/public/images/partner/Group-12.svg";
import Thirteen from "@/public/images/partner/Group-13.svg";
import Forteen from "@/public/images/partner/Group-14.svg";
import Fifteen from "@/public/images/partner/Group-15.svg";
import Sixteen from "@/public/images/partner/Group-16.svg";
import Seventeen from "@/public/images/partner/Group-17.svg";
import Nineteen from "@/public/images/partner/Group-18.svg";


const Partner = () => {
  const pathname = usePathname();
  const isHomeTwoRoute = pathname === "/index-two";

  return (
    <div className={"partner section" + (isHomeTwoRoute ? " pb-0" : " ")}>
      <div className="container">
        {/* <div className="row justify-content-center">
          <div className="col-12 col-lg-5">
            <div className="section__header text-center">
              <h2 className="title sub-title-two mt-0 title-animation">
                Our Partner&apos;s
              </h2>
            </div>
          </div>
        </div> */}
        <div className="row" style={{borderTop: "solid 1px", borderBottom: "solid 1px", paddingTop: "20px", paddingBottom: "20px"}}>
          <div className="col-12">
            <Swiper
              slidesPerView={2}
              spaceBetween={24}
              speed={2000}
              loop={true}
              roundLengths={true}
              centeredSlides={true}
              centeredSlidesBounds={false}
              modules={[Autoplay]}
              autoplay={{
                delay: 3,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                992: {
                  slidesPerView: 5,
                },
                768: {
                  slidesPerView: 4,
                },
                425: {
                  slidesPerView: 3,
                },
              }}
              className="partner__slider"
            >
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={One} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Two} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Three} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Four} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Five} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Six} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Seven} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Eight} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Nine} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Ten} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Eleven} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Twelve} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Four} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Thirteen} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Forteen} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Fifteen} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Sixteen} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Seventeen} alt="Image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner__slider-single">
                  <Image src={Nineteen} alt="Image" priority />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
