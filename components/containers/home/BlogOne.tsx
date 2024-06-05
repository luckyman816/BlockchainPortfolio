"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/blog/one.png";
import two from "@/public/images/blog/two.png";
import three from "@/public/images/blog/three.png";
import four from "@/public/images/blog/four.png";
import five from "@/public/images/blogOne/five.png";
import six from "@/public/images/blogOne/six.png";
import seven from "@/public/images/blogOne/seven.png";
import eight from "@/public/images/blogOne/eight.png";
import nine from "@/public/images/blogOne/nine.png";
import ten from "@/public/images/blogOne/ten.png";
import eleven from "@/public/images/blogOne/eleven.png";
import twellve from "@/public/images/blogOne/twellve.png";
const BlogOne = () => {
  const [isHover, setIsHover] = useState(0);

  return (
    <section className="section blog">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="section__header mb-0 text-center text-lg-start">
                    <h2 className="title mt-12 title-animation">
                      My Work experience
                    </h2>
                    <p> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gaper fade-wrapper">
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 9 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(9)}
            >
              <div className="blog__single-thumb">
                <Link href="https://www.sappy.lol/seals">
                  <Image src={ten} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="https://www.sappy.lol/seals">
                    -NFT Marketplace
                    <br />
                    NFT platform hosting a collection of 10,000 unique digital
                    collectibles based on the Ethereum blockchain{" "}
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 10 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(10)}
            >
              <div className="blog__single-thumb">
                <Link href="https://www.marsnext.io/">
                  <Image src={eleven} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="https://www.marsnext.io/">
                    -DeFi Yield Farming platforms
                    <br />
                    The platform focuses on providing innovative yield farming
                    opportunities to users, enhancing their returns on digital
                    assets{" "}
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 11 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(11)}
            >
              <div className="blog__single-thumb">
                <Link href="https://heroswap.com/">
                  <Image src={twellve} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="https://heroswap.com/">
                    -Decentralized Exchanges(DEXs)
                    <br />
                    This project is cross-chain swap project aimed at
                    facilitating seamless asset exchanges between diyerent
                    blockchain networks{" "}
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 0 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(0)}
            >
              <div className="blog__single-thumb">
                <Link href="https://staging-prototype-metropoly.netlify.app/">
                  <Image src={seven} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="https://staging-prototype-metropoly.netlify.app/">
                    -NFT Marketplace
                    <br /> -Buy Your First Real Estate NFT in Seconds <br />
                    -The world’s first NFT marketplace backed by real-world
                    properties{" "}
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 1 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(1)}
            >
              <div className="blog__single-thumb">
                <Link href="https://www.nakheel.com/">
                  <Image src={four} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="https://www.nakheel.com/">
                    -Nakheel.com
                    <br /> -Leading Dubai Real Estate Developer | Nakheel <br />
                    -ASP.Net & Mustache & Open Graph{" "}
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 2 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(2)}
            >
              <div className="blog__single-thumb">
                <Link href="https://avix.co.jp/">
                  <Image src={six} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="https://avix.co.jp/">
                    Avix.co.jp
                    <br />
                    -As a flagship shop <br />
                    -Ai Signage Solution
                    <br />
                    -The challenge to create a new shop decoration
                    <br />
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 3 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(3)}
            >
              <div className="blog__single-thumb">
                <Link href="https://rango.exchange/apis">
                  <Image src={eight} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="https://rango.exchange/apis">
                    Rango Exchange
                    <br />
                    -One API, all DeFi liquidity & cross-chain interoperability{" "}
                    <br />
                    -DApp, API & SDK, Widget, Explorer
                    <br />
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 4 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(4)}
            >
              <div className="blog__single-thumb">
                <Link href="https://www.xyzreality.com/">
                  <Image src={one} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="https://www.xyzreality.com/#">
                    XYZreality.com
                    <br /> -That saves your construction project time and money{" "}
                    <br />
                    -Augmented reality that is purpose built for construction{" "}
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 5 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(5)}
            >
              <div className="blog__single-thumb">
                <Link href="https://viptalkers.com/">
                  <Image src={two} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <div className="blog__single-meta"></div>
                <h4>
                  <Link href="https://viptalkers.com/">
                    Viptalkers.com
                    <br /> -Learn English Online. <br />
                    -Learn English with video courses and live tutors. <br />
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 6 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(6)}
            >
              <div className="blog__single-thumb">
                <Link href="https://kidzrup.com/">
                  <Image src={three} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="https://kidzrup.com/">
                    Kidzrup.com <br />
                    -For children English Online Platform
                    <br />
                    -We enable students aged 7-17 to improve their foreign
                    language skills <br />
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 7 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(7)}
            >
              <div className="blog__single-thumb">
                <Link href="https://mintspace.io/?v=f9308c5d0596">
                  <Image src={five} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="https://mintspace.io/?v=f9308c5d0596">
                    Gambulls.com
                    <br />
                    -This is Responsible Casino Game <br />
                    -This game supports the generation of online gamblers
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 8 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(8)}
            >
              <div className="blog__single-thumb">
                <Link href="https://billionair.com/">
                  <Image src={nine} alt="Image" priority />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="https://billionair.com/">
                    Billionair.com
                    <br />
                    Free NFT Tickets, Win Grand Raffle Prize, $AIRB Token is
                    live on MEXC, Stake Your $AIRB, Join weekly contests <br />
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOne;
