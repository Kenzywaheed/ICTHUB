import Carousel from "react-bootstrap/Carousel";
import "./OurClients.css";
import { HiHandRaised } from "react-icons/hi2";

function OurClients() {
  return (
    <section className="our-clients">
      <h2 className="clients-title">OUR CLIENTS</h2>

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

export default OurClients;


// // Our Clients

// import './OurClients.css';

// function OurClients() {
//   return (
//     <>
//       <div className="Clients">
//         <h1 >

//           Our Clients
//         </h1>
//       </div>

//       <div id="carouselExampleControlsClients" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <div className="clients-img-container">
//               <img src="/key.jpeg" alt="client1" height="50px" width="150px" />
//               <img src="/key.jpeg" alt="client2" height="50px" width="150px" />
//               <img src="/key.jpeg" alt="client3" height="50px" width="150px" />
//               <img src="/key.jpeg" alt="client4" height="50px" width="150px" />
//             </div>
//           </div>
//           <div className="carousel-item">
//             <div className="clients-img-container">
//               <img src="/key.jpeg" alt="client1" height="50px" width="150px" />
//               <img src="/key.jpeg" alt="client2" height="50px" width="150px" />
//               <img src="/key.jpeg" alt="client3" height="50px" width="150px" />
//               <img src="/key.jpeg" alt="client4" height="50px" width="150px" />
//             </div>
//           </div>
//           <div className="carousel-item">
//             <div className="clients-img-container">
//               <img src="/key.jpeg" alt="client1" height="50px" width="150px" />
//               <img src="/key.jpeg" alt="client2" height="50px" width="150px" />
//               <img src="/key.jpeg" alt="client3" height="50px" width="150px" />
//               <img src="/key.jpeg" alt="client4" height="50px" width="150px" />
//             </div>
//           </div>
//         </div>

//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleControlsClients"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>

//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleControlsClients"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </>
//   );
// }

// export default OurClients;