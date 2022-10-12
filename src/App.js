import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Team from './components/About/Team';
import Mdmessage from './components/About/Mdmessage';
import Chairperson from './components/About/Chairperson';
//import Team from './components/Home/Home.js';
import {BrowserRouter as Router, Routes,} from "react-router-dom";
import Director from './components/About/Director';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PreMedical from './components/PreMedical/PreMedical';
import Pathlogy from './components/Pathlogy/Pathlogy';
function App() {
  return (
    <div className="App">

    <Header/>

    {/* <Home/> */}
    <Pathlogy/>
    <PreMedical/>
    
    <Contact/>
    <About/>
    <Director/>
    <Chairperson/>
    <Mdmessage/>
<Team/>

    <Footer/>

    </div>
  );
}

export default App;
