import React from 'react'
import Aboutmajorhealth from './Aboutmajorhealth';
import Cotnactform from './Contactform';
import Hero from './Hero';
import India from './India';
import Services from './Services';
import Testimonials from './Testimonials';
import './Home.css';
const Home = ()=>{
return(
    <>
          <Hero/>
    <Services/>
    <Aboutmajorhealth/>
    <Cotnactform/>
    <Testimonials/>
    <India/>
    </>
)
}
export default Home