import "./Ourlocations.css";

function Ourlocations() {
  return (
    <section className="our-locations">
      <h1 className="our-locations-title">OUR LOCATIONS</h1>

      <div className="container">
        <div className="row  g-3 justify-content-center">
          {/* card1 */}
          <div className=" col-12 col-md-6 col-lg-4">
            <div className="card location-card">
              <div className="card-body location-body">
                <div className="location-header">
                  <img
                    src="/images/egypt flag.jpg"
                    alt="Egypt"
                    className="location-flag"
                  />
                  <h5 className="location-name">Alexandria</h5>
                </div>

                <ul className="location-list">
                  <li>
                    <i className="fa fa-map-o"></i>
                    <span>Building 34, Apartment 2 - AlIttihad</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="col-12 col-md-6 col-lg-4 ">
            <div className="card location-card">
              <div className="card-body location-body">
                <div className="location-header">
                  <img
                    src="/images/egypt flag.jpg"
                    alt="Egypt"
                    className="location-flag"
                  />
                  <h5 className="location-name">Cairo</h5>
                </div>
                <ul className="location-list">
                  <li>
                    <i className="fa fa-map-o"></i>
                    <span>Al Taawuniya - Al Shorouk City</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourlocations;
