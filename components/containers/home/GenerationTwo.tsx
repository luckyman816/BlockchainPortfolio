import Image from "next/image";
import Link from "next/link";
import genThumb from "@/public/images/desoImage.png";

const GenerationTwo = () => {
  return (
    <section className="section gen-two pb-0">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-5 order-last order-lg-first">
            <div className="gen-two__thumb">
              <div className="reveal-img parallax-img">
                <Image src={genThumb} alt="Image" priority 
                style={{
                    borderRadius: "20px",
                    boxShadow: "0 0 6px 10px rgb(0,170,255)",
                  }} />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 col-xxl-5 offset-xxl-2">
            <div className="section__content">
              <span className="sub-title">Frontend & Blockchain developer</span>
              <h2 className="title title-animation">
              DESO <br />2019/8 - 2021/11
              </h2>
              <p>
              • As the Full Stack developer, I specialized in using Solidity and Rust for various blockchains such as Polygon, Solana and Ethereum. <br/>
              • I worked with multi-chain environments, particulary focusing on the main project of the company, Heroswap, operating across multiple blockchains<br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerationTwo;
