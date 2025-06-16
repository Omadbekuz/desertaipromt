// import React from "react";
// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home/Home";
// import About from "./Pages/About/About";
// import Promts from "./Pages/Promts/Promt";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/footer";
// import Contacts from "./Pages/contacts/Contact";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/prompts" element={<Promts />} />
//         <Route path="/contact" element={<Contacts />} />
//         <Route path="*" element={"404 not found"} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Promts from "./Pages/Promts/Promt";
import Contacts from "./Pages/contacts/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div id="/">
        <Home />
      </div>
      <div id="prompts">
        <Promts />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contacts />
      </div>
      <Footer />
    </>
  );
}

export default App;
