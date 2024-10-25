import './App.css';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import GetInTouch from './Components/GetInTouch';
import GlobalReach from './Components/GlobalReach';
import GridOverlay from './Components/GridOverlay';
import Header from './Components/Header';
import Specialize from './Components/Specialize';
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
     <Footer/>
    </div>
  );
}

export default App;
