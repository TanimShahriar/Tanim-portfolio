import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Service from "../Service/Service";
import About from "../About/About";




const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Tanim's Portfolio | Home</title>
      </Helmet>
      <Banner></Banner>
      <Experience></Experience>
      <Education></Education>
      <Service></Service>
      <Skills></Skills>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;