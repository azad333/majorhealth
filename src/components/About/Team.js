import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {majorhealtteam} from '../Alldata';
import Pagetitle from "../Pagetitle";
import './Team.css';
const Team =() =>{
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 2,
    autoplay: true,
      autoplaySpeed: 2000
  };
    return(
        <>
        <Pagetitle title="OUR TEAM" />
        <section className="ourtestimonails">
        <div className="beforefater">
        <div className="container">
            <div className="row">
            <div className='heading text-center'>
            <h2>Meet Our Doctors</h2>
             <p>Our team of Doctors, Nurses and Practitioners have the training and experience required to ensure<br/> that you are in the safest and most expert hands from the moment that you step into our Hospital.</p>
            </div>
        <Slider {...settings}>
        {majorhealtteam.map((allmember)=>{
            const{ name, designation, location, memberimages}=allmember
            return(
               <div className="teamthumbs" key={allmember.id}>
              <div className="mebbers">
              <div className="memberpic">
              <img src={memberimages} alt="quoteiocn"/>
              </div>
              <h3>{name}</h3>
              <h5>{designation}</h5>
               <p>{location}</p>
                
               </div>
               </div>
            )

        })}
           
          
    </Slider>
    </div>
        </div>
        </div>
        </section>
        </>
    )
}
export default Team;