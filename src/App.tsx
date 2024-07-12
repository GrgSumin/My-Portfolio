import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Home from "./component/Home/home";
import Navbar from "./component/NavTabs";
import Services from "./component/Home/Services";
import Form from "./component/Home/form";
import Projects from "./component/Home/projects";
import Aboutme from "./component/Home/Aboutme";
import Page from "./component/Home/page";

function App() {
  return (
    <div className="App">
      <div className="fixed bg-black top-0 z-50 w-full border-b-2 border-[#BAB3A9]">
        <Navbar />
      </div>

      <div className="pt-20">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Form />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<Aboutme />} />
        </Routes>
      </div>
      <Page />
      <Footer />
    </div>
  );
}

export default App;
