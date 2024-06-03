import Image from "next/image";
import Link from "next/link";
import CraftThumb from "@/public/images/avatar.png";
import Shape from "@/public/images/footer/shape-one.png";

const Craft = () => {
  return (
    <section className="section craft" id="scrollPosition">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-7 col-xxl-7">
            <div className="section__content">
              <span className="sub-title">
              Full-Stack developer | Blockchain Developer & Architect
              </span>
              <h2 className="title title-animation">
                React, Next, UI/UX | NFT, Solidity, Smart contract, ERC, EVM.
              </h2>
              <p>
                I am interested in the Blockchain Developer and Full-Stack
                Developer positions from Trukey, combining expertise in
                blockchain technology, smart contracts, decentralized
                applications, and both front-end and back-end development.<br/> 
                I have a proven record in creating secure and scalable blockchain
                solutions using frameworks like Ethereum, Hyperledger, and
                Corda. <br/>
                My skills include crafting user interfaces and building
                strong server-side applications using various technologies to
                deliver seamless and responsive web solutions. <br/>
                I am committed to teamwork, high coding standards, and embracing new technologies 
                to tackle challenges in blockchain and web development, making meaningful contributions to innovative projects. <br/>
                I am excited about the opportunity to bring my technical expertise,
                problem-solving skills, and passion for innovation to your project and contribute to impactful projects.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xxl-5">
            <div className="craft__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image
                  src={CraftThumb}
                  alt="Image"
                  priority
                  style={{
                    borderRadius: "20px",
                    boxShadow: "0 0 4px 6px rgb(0,170,255)",
                    width: "500px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime-one">
        <Image src={Shape} alt="Image" priority />
      </div>
    </section>
  );
};

export default Craft;
