import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Clienttestimonials} from '../Alldata';
const Testimonials =() =>{
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:2,
    slidesToScroll: 2,
    autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
    return(
        <>
        <section className="ourtestimonails">
        <div className="beforefater">
        <div className="container">
            <div className="row">
            <div className='heading text-center'>
            <h2>Our Testimonials</h2>
                <h5>What our user says</h5>
               
            </div>
        <Slider {...settings}>
        {Clienttestimonials.map((client)=>{
            const{discription, name, designation, quoteicn}=client
            return(
               <div className="testimonialsthmb" key={client.id}>
              <div className="clientby">
              <div className="quoteicon"><img src={quoteicn} alt="quoteiocn"/></div>
               <p>{discription}</p>
                <h3>{name} <span>{designation}</span></h3>
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
export default Testimonials;