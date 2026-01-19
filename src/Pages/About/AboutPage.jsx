import FAQ from "../../components/FAQ/FAQ";

import OverView from "../../components/Overview/Overview";
import "./AboutUS.css" ;
function AboutPage() {
  return (
 <>

 <div className="container about-container g-5 mt-5">
  <div className="col-12 col-lg-6 about-text">
    <div className="about-title">
      <i className="fa fa-users"></i> About Us
    </div>

    <p className="about-desc">
      "Expertise in Artificial Intelligence, cloud computing, Internet of Things,
      web/mobile development, Data Science, Digital photographing, architecture/civil
      engineering, Fintech, E-business, Optical Fiber Solutions"
    </p>
  </div>

  <div className="col-12 col-lg-6">
    <img
      src="/images/about.jpg"
      alt="About"
      className="about-image"
    />
  </div>
</div>

     <FAQ />
 </>
  );
}

export default AboutPage;
