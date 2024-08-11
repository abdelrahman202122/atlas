import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Team from "./Team";
import WhyChooseUs from "./WhyChooseUs";

export default function Home({ params: { lang } }) {
  console.log(lang);
  return (
    <div>
      <Header />
      <HeroSection lang={lang} />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Team />
      <Footer />
    </div>
  );
}
