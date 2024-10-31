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

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <GlobalReach/>
     <WhyChooseOlygers/>
     <GetInTouch/>
     <GridOverlay/>
     <Specialize/>
     <TestimonialSlider/> 
     <OurEvents/>
     <TeamSection/>
     <Footer/>
    </div>
  );
}

export default App;
