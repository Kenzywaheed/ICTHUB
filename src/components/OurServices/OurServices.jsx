import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import "./OurServices.css";

function OurServices() {
  return (
    <section className="our-services">
      <div className="container">
        <h1 className="our-services-title">OUR SERVICES</h1>

        <Tabs defaultActiveKey="technology" id="services-tabs" className="services-tabs">
          
          {/* Technology */}
          <Tab eventKey="technology" title="Technology">
            <div className="services-cards">
              <Card className="service-card ">
                <Card.Img variant="top" src="/images/6.jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head">Artificial Intelligence</Card.Title>
                  <Card.Text className="text-center mt-1">Innovative AI solutions and applications</Card.Text>
                </Card.Body>
              </Card>

              <Card className="service-card ">
                <Card.Img variant="top" src="/images/1.jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head"> Cloud Computing </Card.Title>
                  <Card.Text className="text-center mt-1">Google Cloud Platform (GCP)</Card.Text>
                </Card.Body>
              </Card>

             
               <Card className="service-card ">
                <Card.Img variant="top" src="/images/7.jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head">Internet of Things (IoT)</Card.Title>
                  <Card.Text className="text-center mt-1">Connecting devices and systems for seamless communication</Card.Text>
                </Card.Body>
              </Card>

              <Card className="service-card ">
                <Card.Img variant="top" src="/images/00.jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head">Web Development</Card.Title>
                  <Card.Text className="text-center mt-1">Crafting visually appealing and user-friendly websites</Card.Text>
                </Card.Body>
              </Card>

               <Card className="service-card ">
                <Card.Img variant="top" src="/images/10.jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head">Mobile Development</Card.Title>
                  <Card.Text className="text-center mt-1">Creating intuitive and impactful mobile applications</Card.Text>
                </Card.Body>
              </Card>

             <Card className="service-card ">
                <Card.Img variant="top" src="/images/4.jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head">Data Analytics and Big Data</Card.Title>
                  <Card.Text className="text-center mt-1">Extracting insights from large datasets</Card.Text>
                </Card.Body>
              </Card>

           <Card className="service-card ">
                <Card.Img variant="top" src="/images/5.jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head">Fintech</Card.Title>
                  <Card.Text className="text-center mt-1">Financial technology solutions and services.</Card.Text>
                </Card.Body>
              </Card>


              <Card className="service-card ">
                <Card.Img variant="top" src="/images/8.jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head">E-Business</Card.Title>
                  <Card.Text className="text-center mt-1">Concepts, models, and applications for online business.</Card.Text>
                </Card.Body>
              </Card>


              <Card className="service-card ">
                <Card.Img variant="top" src="/images/9.jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head">Optical Fiber & DWDM</Card.Title>
                  <Card.Text className="text-center mt-1">Innovative AI solutions and applications</Card.Text>
                </Card.Body>
              </Card>


              <Card className="service-card ">
                <Card.Img variant="top" src="/images/11 (1).jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head">Transformation Technology Services</Card.Title>
                  <Card.Text className="text-center mt-1">Assisting organizations in embracing digital transformation</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Tab>

          {/*  Construction */}
          <Tab eventKey="construction" title="Construction">
            <div className="services-cards">
             
          <Card className="service-card ">
                <Card.Img variant="top" src="/images/2.jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head">Professional Photography</Card.Title>
                  <Card.Text className="text-center mt-1">Capturing moments and telling stories.</Card.Text>
                </Card.Body>
              </Card>

             
            <Card className="service-card ">
                <Card.Img variant="top" src="/images/3.jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head">Architecture/Civil Engineering Summer Training</Card.Title>
                  <Card.Text className="text-center mt-1">Industry insights, hands-on experience, mentorship.</Card.Text>
                </Card.Body>
              </Card>

              
               <Card className="service-card ">
                <Card.Img variant="top" src="/images/5.jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head">Fintech</Card.Title>
                  <Card.Text className="text-center mt-1">Financial technology solutions and services..</Card.Text>
                </Card.Body>
              </Card>

            </div>
          </Tab>

          {/* Finishing */}
          <Tab eventKey="finishing" title="Finishing">
            <div className="services-cards">
              
              <Card className="service-card ">
                <Card.Img variant="top" src="/images/2.jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head">Professional Photography</Card.Title>
                  <Card.Text className="text-center mt-1">Capturing moments and telling stories.</Card.Text>
                </Card.Body>
              </Card>


             
              <Card className="service-card ">
                <Card.Img variant="top" src="/images/5.jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head">Fintech</Card.Title>
                  <Card.Text className="text-center mt-1">Financial technology solutions and services..</Card.Text>
                </Card.Body>
              </Card>

            </div>
          </Tab>

          {/* Training */}
          <Tab eventKey="training" title="Training">
            <div className="services-cards">
              
              <Card className="service-card ">
                <Card.Img variant="top" src="/images/3.jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head">Architecture/Civil Engineering Summer Training</Card.Title>
                  <Card.Text className="text-center mt-1">Industry insights, hands-on experience, mentorship.</Card.Text>
                </Card.Body>
              </Card>


            
              <Card className="service-card ">
                <Card.Img variant="top" src="/images/12.jpg" />
                <Card.Body>
                  <Card.Title className="text-center mt-2 custom-head">Training Services</Card.Title>
                  <Card.Text className="text-center mt-1">Providing comprehensive training programs and workshops.</Card.Text>
                </Card.Body>
              </Card>

            </div>
          </Tab>

        </Tabs>
      </div>
    </section>
  );
}
export default OurServices;
