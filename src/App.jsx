import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./Pages/HomaPage";
import ServicesPage from "./Pages/ServicesPage";
import AboutPage from "./Pages/About/AboutPage";
// import AcademyPage from "./Pages/AcademyPage";
import OurSolutionsPage from "./Pages/OurSolutionPage";
import EventPage from "./components/Eventus/Event";
import ContactPage from "./components/ContactUS/ContactUs";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Home-page" element={ <HomePage />} />
         <Route path="/" element={ <HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* <Route path="/academy-page" element={<AcademyPage />} /> */}
        <Route path="/solution" element={<OurSolutionsPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

// import HomePage from "./Pages/HomaPage";
// import ServicesPage from "./Pages/ServicesPage";
// import AboutPage from "./Pages/AboutPage";
// import AcademyPage from "./Pages/AcademyPage";
// import OurSolutionsPage from "./Pages/OurSolutionPAge";
// import EventPage from "./components/Eventus/Event";
// import ContactPage from "./components/ContactUS/ContactUs";

// function App() {
//   return (
//     <div className="app-shell">
//       <Navbar />

//       <main className="app-main">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/services" element={<ServicesPage />} />
//           <Route path="/academy-page" element={<AcademyPage />} />
//           <Route path="/solution" element={<OurSolutionsPage />} />
//           <Route path="/event" element={<EventPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;

// import PageShell from "./components/PageShell/PageShell";
// import HomePage from "./Pages/HomaPage";
// import AcademyPage from "./Pages/AcademyPage";
// import { Routes, Route } from "react-router-dom";
// import ServicesPage from "./Pages/ServicesPage";
// import AboutPage from "./Pages/AboutPage";
// import OurSolutionsPage from "./Pages/OurSolutionPAge";
// import EventPage from "./components/Eventus/Event";
// import ContactPage from "./components/ContactUS/ContactUs";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<PageShell><HomePage /></PageShell>} />
//       <Route path="/academy-page" element={<PageShell><AcademyPage /></PageShell>} />
    
//                <Route path="/about" element={<PageShell><AboutPage /></PageShell>} />
//                <Route path="/services" element={<PageShell> <ServicesPage /></PageShell>} />
      
//                <Route path="/solution" element={<PageShell><OurSolutionsPage /></PageShell>} />
//                <Route path="/event" element={<PageShell><EventPage /></PageShell>} />
//                <Route path="/contact" element={<PageShell><ContactPage /></PageShell>} />
//     </Routes>
//   );
// }

// export default App;