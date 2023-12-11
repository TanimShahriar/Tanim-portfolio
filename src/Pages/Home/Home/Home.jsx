import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";




const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Tanim's Portfolio | Home</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;