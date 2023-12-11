import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";




const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Tanim's Portfolio | Home</title>
      </Helmet>
      <Banner></Banner>
      <Experience></Experience>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
};

export default Home;