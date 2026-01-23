import Accordion from "react-bootstrap/Accordion";
import "./FAQ.css";

function FAQ() {
  return (
    <>
    < div className="container">
   
     <section className="faq-section">
      <h1 className="faq-title">FAQ's</h1>

      <div className="faq-box">
        <Accordion defaultActiveKey="0" flush>

          {/*first */}
          {/* eventKey => id */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that
              just about any HTML can go within the accordion-body though the
              transition does limit overflow.
            </Accordion.Body>
          </Accordion.Item>
             
          {/* second */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
                 <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that
              just about any HTML can go within the accordion-body though the
              transition does limit overflow.
            </Accordion.Body>
          </Accordion.Item>
             

          {/* third */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
                <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that
              just about any HTML can go within the accordion-body though the
              transition does limit overflow.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
    </div>
    </>
   
  );
}

export default FAQ;