import { useEffect } from 'react';
import './App.scss';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import GetInTouch from './Components/GetInTouch';
import GlobalReach from './Components/GlobalReach';
import GridOverlay from './Components/GridOverlay';
import Header from './Components/Header';
import OurEvents from './Components/OurEvents';
import Specialize from './Components/Specialize';
import TeamSection from './Components/TeamSection';
import TestimonialSlider from './Components/TestimonialSlider';
import WhyChooseOlygers from './Components/WhyChooseOlygers';
import FloatingCircle from './FloatingCircle';
import 'aos/dist/aos.css';
import Aos from 'aos';
import WhatWeOffer from './Components/WhatWeOffer';
import ServicesSection from './Components/ServicesSection';

function App() {
  useEffect(() => {
    Aos.init({ duration: 500, once: true });
  }, [])
  return (
    <div className="App">
      <FloatingCircle />
      <Header />
      <Banner />
      <GlobalReach />
      <WhyChooseOlygers />
      <GetInTouch />
      <GridOverlay />
      <Specialize />
      <TestimonialSlider />
      <WhatWeOffer />
      <ServicesSection />
      <OurEvents />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;
