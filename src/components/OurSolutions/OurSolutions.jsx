import './OurSolutions.css';
function OurSolutions() {
  return (
    <section className="our-solution">
      <div className="container">
        <div className="solutions-header">
          <h2>
            <span className="underline">OUR</span> SOLUTION
          </h2>
          <p>
            Our digital software helps you to achieve successful digital
            transformation and competitive edge in your markets
          </p>
        </div>
        <div className="row solutions-grid">

          <div className="col-md-4 solution-item">
            <h3>Digital Enterprise Management</h3>
            <p>
              Our digital management software helps you to automate IT
              operations & business process
            </p>
            <a href="#">Explore All</a>
          </div>

          <div className="col-md-4 solution-item">
            <h3>Governance, Risk and Compliance</h3>
            <p>
              Our GRC software helps you to manage all governance, compliance,
              certifications and risk management requirements
            </p>
            <a href="#">Explore All</a>
          </div>

          <div className="col-md-4 solution-item">
            <h3>Customer Services Management</h3>
            <p>
              Our CSM solution helps you to manage your services delivery and
              enhance customers satisfaction.
            </p>
            <a href="#">Explore All</a>
          </div>

          <div className="col-md-4 solution-item">
            <h3>AI & Automation</h3>
            <p>
              Our AI software helps you to enhance your productivity, reduce
              costs, and improve business performance.
            </p>
            <a href="#">Explore All</a>
          </div>

          <div className="col-md-4 solution-item">
            <h3>Internet of Things (IoT)</h3>
            <p>
              Our Internet of Things (IoT) Solutions help organizations to
              create new business models, increase operational efficiencies,
              and improve the customer experience in different industries.
            </p>
            <a href="#">Explore All</a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurSolutions;