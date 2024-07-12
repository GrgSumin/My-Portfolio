import Aboutme from "./Aboutme";
import ImageAnimation from "./ImageAnimation";
import Services from "./Services";
import Form from "./form";
import { Element } from "react-scroll";
import Home from "./home";

function Page() {
  return (
    <div className="flex flex-col items-center m-auto">
      <Element name="home">
        <Home />
      </Element>

      <Element name="services" className="lg:w-4/5 ">
        <Services />
      </Element>
      <Element name="about" className="mt-20">
        <Aboutme />
      </Element>
      <Element name="projects" className="w-3/4 m-auto mb-20 p-10">
        <ImageAnimation />
      </Element>
      <Element name="contact" className="element">
        <Form />
      </Element>
    </div>
  );
}

export default Page;
