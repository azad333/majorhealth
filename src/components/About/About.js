import React from "react";
import Pagetitle from "../Pagetitle";
import Services from "../Home/Services"
import "../Home/Home.css"
const About =()=>{
    return(
        <>
             <Pagetitle title="About Us" />
             <section className="directormessages">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="directorpic mt-5">
                            <img src="img/team-doctro.jpg" alt="Managing Director Message" className="img-fluid" />
                        </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                       
                            <div className="messagebydirector">
                            <div className="heading">
                           <h2>About Major Kalshi Healthcare </h2>
                        </div>
                            <p>Major Kalshi Classes Pvt Ltd is honoured to give medical service by inaugrating Major Kalshi Health Care Centre which includes all the facilities Pathology & Pharmacy. For the 1 st time in India major Klashi Health Care Centre has setp forward for the pre-medical checkup which is final stage for any of you or defence selection , not just only complete checkup but also the treatment & guidance if any abnormally detected</p>
                            </div>
                        </div>
                    </div>
                </div>
             </section>
             <Services/>
        </>
       
    )
}
export default About