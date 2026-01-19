import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
import Mission from "../ourMission/Mission";

function Slider() {
  return (
    <>
    <Carousel fade controls indicators>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="/images/6.jpg"
          alt="Slide 1"
        />
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center center-carousel">
        <h1 class="custom-color  p-4  ">"Expertise in Artificial Intelligence, Harnessing the power of artificial intelligence for business transformation.s"</h1>
      </div>
      </Carousel.Item>

     <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="/images/1.jpg"
          alt="Slide 1"
        />
       <div class="carousel-caption d-flex flex-column justify-content-center align-items-center center-carousel">
        <h1 class="custom-color  p-4  ">"Cloud computing ,Google Cloud Platform (GCP)"</h1>
      </div>
      </Carousel.Item>

    <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="/images/7.jpg"
          alt="Slide 1"
        />
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center center-carousel">
        <h1 class="custom-color  p-4  ">"Connecting the world through the Internet of Things."</h1>
      </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="/images/10.jpg"
          alt="Slide 1"
        />
       <div class="carousel-caption d-flex flex-column justify-content-center align-items-center center-carousel">
        <h1 class="custom-color  p-4  ">"Mobile Development Creating intuitive and impactful mobile applications"</h1>
      </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="/images/8.jpg"
          alt="Slide 1"
        />
      <div class="carousel-caption d-flex flex-column justify-content-center align-items-center center-carousel">
        <h1 class="custom-color  p-4  ">"Data Science, Data Analytics and Big Data Extracting insights from large datasets"</h1>
      </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="/images/2.jpg"
          alt="Slide 1"
        />
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center center-carousel">
        <h1 class="custom-color  p-4  ">"Digital photographing, Capturing moments and telling stories"</h1>
      </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="/images/3.jpg"
          alt="Slide 1"
        />
      <div class="carousel-caption d-flex flex-column justify-content-center align-items-center center-carousel">
        <h1 class="custom-color  p-4  ">"Architecture/Civil Engineering Summer Trasining Industry insights, hands-on experience, mentorship"</h1>
      </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="/images/5.jpg"
          alt="Slide 1"
        />
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center center-carousel">
        <h1 class="custom-color  p-4  ">"Fintech Financial technology solutions and services."</h1>
      </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="/images/9.jpg"
          alt="Slide 1"
        />
       <div class="carousel-caption d-flex flex-column justify-content-center align-items-center center-carousel">
        <h1 class="custom-color  p-4  ">"E-Business Concepts, models, and applications for online business"</h1>
      </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="/images/11.jpg"
          alt="Slide 1"
        />
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center center-carousel">
        <h1 class="custom-color  p-4  ">"Delivering high-speed connectivity through optical fiber and DWDM."</h1>
      </div>
      </Carousel.Item>

    
    </Carousel>
    <Mission />
    </>
  );
}

export default Slider;