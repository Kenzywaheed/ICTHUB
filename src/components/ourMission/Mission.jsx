
import { FiAlertCircle } from "react-icons/fi";
import "./Mission.css";
import Card from 'react-bootstrap/Card';
import { FaRegEye } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

function Mission() {
  return (
   <div className=" mt-5 d-flex flex-wrap gap-5 justify-content-center">

    <Card style={{ width: '22rem' }}>
      <Card.Body>
         <h1 className="t-title text-center"> <FiAlertCircle /> Our Mission</h1>
        <Card.Text>
        <p className="t-sub m-3">Our mission is to help our partners to transfer their Business services into Digital services through our innovative and services. Our values: Excellence, Exceed Customer Expectation, Team Work, Integrity, Transparency, and Fairness.</p>
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }}>
      <Card.Body>
         <h1 className="t-title text-center"> <FaRegEye />  Our Vision</h1>
        <Card.Text>
        <p className="t-sub m-3">Our vision is to be one of the global leaders in Automation, and Digital Transformation.</p>
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }}>
      <Card.Body>
         <h1 className="t-title text-center"> <IoSettings /> What we do</h1>
        <Card.Text>
        <ul>
            <li><p>Web and Mobile Apps Design and Development, Testing, and Hosting.</p></li>
            <li><p>Training for Communication Engineering, Civil and Architecture Engineering, Mechanical Engineering, Computer Science, Project Management, E-Business, Software Engineering & Development, Digital Business.</p></li>
        </ul>
        </Card.Text>
       
      </Card.Body>
    </Card>
 

     </div>
  );
}

export default Mission;
