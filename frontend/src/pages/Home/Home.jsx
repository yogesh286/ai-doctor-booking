import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

import Specialities from "../../components/Specialities/Specialities";
import TopDoctors from "../../components/TopDoctors/TopDoctors";
import AIBanner from "../../components/AIBanner/AIBanner";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
     {/* <Navbar/> */}
      <Hero />
      <WhyChooseUs />
      <Specialities />
      <TopDoctors />
      <AIBanner />
      <Footer/>
    </>
  );
};

export default Home;