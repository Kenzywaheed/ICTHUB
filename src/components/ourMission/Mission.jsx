import { FiAlertCircle } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import "./Mission.css";

function Mission() {
  return (
    <Container className="mission-container">
      <h1 className="our-Mission-title">ABOUT ICTHUB</h1>
      <Row>
        <Col md={4} className="mb-4">
          <Card className="card-custom">
            <Card.Body>
              <h1 className="t-title justify-content-center align-items-center d-flex gap-1">
                <div>
                  <FiAlertCircle className="header-icon" />
                </div>
                <div>Our Mission</div>
              </h1>
              <Card.Text>
                <p className="t-sub">
                  Our mission is to help our partners to transfer their Business
                  services into Digital services through our innovative and
                  services. Our values: Excellence, Exceed Customer Expectation,
                  Team Work, Integrity, Transparency, and Fairness.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="card-custom">
            <Card.Body>
              <h1 className="t-title justify-content-center align-items-center d-flex gap-1">
                <div>
                  <FaRegEye className="header-icon" />
                </div>
                <div>Our Vision</div>
              </h1>
              <Card.Text>
                <p className="t-sub">
                  Our vision is to be one of the global leaders in Automation,
                  and Digital Transformation.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="card-custom">
            <Card.Body>
              <h1 className="t-title justify-content-center align-items-center d-flex gap-1">
                <div>
                  <IoSettings className="header-icon" />
                </div>
                <div>What We Do</div>
              </h1>
              <Card.Text>
                <p className="t-sub">
                  Training for Communication Engineering, Civil and Architecture
                  Engineering, Mechanical Engineering, Computer Science, Project
                  Management, E-Business, Software Engineering & Development,
                  Digital Business.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Mission;
