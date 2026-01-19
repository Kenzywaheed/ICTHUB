import Carousel from "react-bootstrap/Carousel";
import "./OurParents.css";

function OurParents() {
  return (
    <section className="our-clients">
      <h2 className="clients-title">OUR PARENTS</h2>

      <Carousel
        indicators={false}
        controls={true}
        interval={3000}
        pause="hover"
        touch={true}
      >
   
        <Carousel.Item>
          <div className="clients-slide">
            <img src="/key.jpeg" alt="client1" />
            <img src="/key.jpeg" alt="client2" />
            <img src="/key.jpeg" alt="client3" />
            <img src="/key.jpeg" alt="client4" />
          </div>
        </Carousel.Item>

      
        <Carousel.Item>
          <div className="clients-slide">
            <img src="/key.jpeg" alt="client5" />
            <img src="/key.jpeg" alt="client6" />
            <img src="/key.jpeg" alt="client7" />
            <img src="/key.jpeg" alt="client8" />
          </div>
        </Carousel.Item>

      
        <Carousel.Item>
          <div className="clients-slide">
            <img src="/key.jpeg" alt="client9" />
            <img src="/key.jpeg" alt="client10" />
            <img src="/key.jpeg" alt="client11" />
            <img src="/key.jpeg" alt="client12" />
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default OurParents;