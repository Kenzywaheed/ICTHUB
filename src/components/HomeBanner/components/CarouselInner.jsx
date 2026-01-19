// import { useState, useEffect } from "react";
// import Carousel from "react-bootstrap/Carousel";

// function CarouselInner() {
//   const slides = ["/key.jpeg", "/key.jpeg", "/key.jpeg"];
//   const [index, setIndex] = useState(0);


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex(prev => (prev + 1) % slides.length);
//     }, 2000); 
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel
//       activeIndex={index}
//       onSelect={handleSelect}
//       controls
//       indicators
//       fade
//       pause={false}
//     >
//       {slides.map((slide, i) => (
//         <Carousel.Item key={i}>
//           <img
//             className="d-block w-100"
//             src={slide}
//             alt={`slide ${i + 1}`}
//           />
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }

// export default CarouselInner;
