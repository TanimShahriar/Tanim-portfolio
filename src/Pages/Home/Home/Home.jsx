import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";




const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Tanim's Portfolio | Home</title>
      </Helmet>
      <Banner></Banner>
      <Skills></Skills>
      <Experience></Experience>
    </div>
  );
};

export default Home;