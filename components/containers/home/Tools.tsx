import Image from "next/image";
import ToolsThumb from "@/public/images/earnpark.png";

const Tools = () => {
  return (
    <section className="section tools pb-0">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="tools__thumb dir-rtl">
              <div className="reveal-img parallax-img">
                <Image
                  src={ToolsThumb}
                  alt="Image"
                  className="unset"
                  style={{
                    borderRadius: "20px",
                    boxShadow: "0 0 6px 10px rgb(0,170,255)",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1 order-first order-lg-last">
            <div className="section__content">
              <span className="sub-title">Frontend & Blockchain developer &#40;London, UK&#41;</span>
              <h2 className="title title-animation">
               Earnpark, UK <br />
               &#40;2022/8 - 2024/1&#41;
              </h2>
              <p>
              • Spearheaded a joint initiative with product and development teams, enhancing platform efficiency by 20% <br/>
              • Engaged in over 10 open source community projects, liaised with stakeholders and provided mentorship and guidance to 3 emerging junior developers<br/>
              • Enhanced to engineering a robust backend infrastructure pivotal for the convergence of Web3 and FinTech.<br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
