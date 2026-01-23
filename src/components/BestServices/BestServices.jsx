import "./BestServices.css";
import Card from "react-bootstrap/Card";

function BestServices() {
  return (
    <section className="our-services">
      <div className="container">
        <h1 className="best-services-title"> SERVICES</h1>

        <div className="services-cards">
          {/* card1 */}
          <Card className="service-card ">
            <Card.Img variant="top" src="/images/6.jpg" />
            <Card.Body>
              <Card.Title className="text-center mt-2 custom-head">
                Artificial Intelligence
              </Card.Title>
              <Card.Text className="text-center mt-1">
                Innovative AI solutions and applications
              </Card.Text>
            </Card.Body>
          </Card>

          {/* card2 */}
          <Card className="service-card ">
            <Card.Img variant="top" src="/images/1.jpg" />
            <Card.Body>
              <Card.Title className="text-center mt-2 custom-head">
                Cloud Computing
              </Card.Title>
              <Card.Text className="text-center mt-1">
                Google Cloud Platform (GCP)
              </Card.Text>
            </Card.Body>
          </Card>

          {/* card3 */}
          <Card className="service-card ">
            <Card.Img variant="top" src="/images/7.jpg" />
            <Card.Body>
              <Card.Title className="text-center mt-2 custom-head">
                Internet of Things (IoT)
              </Card.Title>
              <Card.Text className="text-center mt-1">
                Connecting devices and systems for seamless communication
              </Card.Text>
            </Card.Body>
          </Card>

          {/* card4 */}
          <Card className="service-card ">
            <Card.Img variant="top" src="/images/00.jpg" />
            <Card.Body>
              <Card.Title className="text-center mt-2 custom-head">
                Web Development
              </Card.Title>
              <Card.Text className="text-center mt-1">
                Crafting visually appealing and user-friendly websites
              </Card.Text>
            </Card.Body>
          </Card>

          {/* card5 */}
          <Card className="service-card ">
            <Card.Img variant="top" src="/images/10.jpg" />
            <Card.Body>
              <Card.Title className="text-center mt-2 custom-head">
                Mobile Development
              </Card.Title>
              <Card.Text className="text-center mt-1">
                Creating intuitive and impactful mobile applications
              </Card.Text>
            </Card.Body>
          </Card>

          {/* card6 */}
          <Card className="service-card ">
            <Card.Img variant="top" src="/images/4.jpg" />
            <Card.Body>
              <Card.Title className="text-center mt-2 custom-head">
                Data Analytics and Big Data
              </Card.Title>
              <Card.Text className="text-center mt-1">
                Extracting insights from large datasets
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="button-container">
        <a className="all-services" href="/services">
          All Services
        </a>
      </div>
    </section>
  );
}

export default BestServices;
