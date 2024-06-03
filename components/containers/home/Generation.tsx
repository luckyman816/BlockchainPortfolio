import Image from "next/image";
import GenThumb from "@/public/images/miquido.png";

const Generation = () => {
  return (
    <section className="section gen pb-0">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-7 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">Lead Frontend Developer</span>
              <h2 className="title title-animation">Miquido <br />&#40;2021/11 - 2022/8&#41;</h2>
              <p>
              • Developed captivating use interfaces for a financial application using React and Material UI, resulting in increased user satisfaction.<br/>
              • Spearheaded the migration of the frontend architecture from TRPC to GraphQL, resulting in improved API response times.<br/>
              • Utilized GraphQL for seamless communication with backend services, reducing data fetching time and enhancing the user experience.<br/>
              • Implemented a CI/CD using Docker and Kubernetes, resulting in a reduction in time-to-market and deployment errors.<br/>
              • Expedited project timelines, ensuring timely delivery of applications features and reducing time-to-market.<br/>
              • Mentored junior developers, leading to improvement in code quality and a reduction in onboarding time.<br/>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xxl-6 offset-xxl-1">
            <div className="gen__thumb">
              <div className="reveal-img parallax-img">
                <Image
                  src={GenThumb}
                  alt="Image"
                  className="unset"
                  style={{
                    borderRadius: "20px",
                    boxShadow: "0 0 6px 10px rgb(0,170,255)",
                    width: '90%'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generation;
