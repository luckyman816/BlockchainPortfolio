"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const TextSliderLarge = () => {
  const pathname = usePathname();
  const isHomeSeven = pathname === "/index-seven";

  return (
    <section
      className={`text-slider-large-wrapper ${
        isHomeSeven ? " section pb-0" : ""
      }`}
    >
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        speed={10000}
        loop={true}
        centeredSlides={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="text-slider-large"
      >
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                Frontend development
                <span className="text-stroke" data-text="React & Next.js">
                  {" "}
                  React & Next.js
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
              Frontend development
                <span className="text-stroke" data-text="Vue & Nuxt.js">
                  {" "}
                  Vue & Nuxt.js
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
              Blockchain
                <span className="text-stroke" data-text="Smart Contract & Solidity">
                  {" "}
                  Smart Contract & Solidity
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
              Blockchain
                <span className="text-stroke" data-text="NFT Marketplace">
                  {" "}
                  NFT Marketplace
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
              Blockchain
                <span className="text-stroke" data-text="DApp Development">
                  {" "}
                  DApp Development
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
              Backend Development
                <span className="text-stroke" data-text="Rust & Golang & Python">
                  {" "}
                  Rust & Golang & Python
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TextSliderLarge;
