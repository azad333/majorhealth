import React from "react";
import Pagetitle from "../Pagetitle";
import Services from "../Home/Services"
import "../Home/Home.css"
const Director =()=>{
    return(
        <>
             <Pagetitle title="Director's Message" />
             <section className="directormessages">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="directorpic mt-5">
                            <img src="img/saurabhsir.jpg" alt="Managing Director Message" className="img-fluid" />
                        </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="heading">
                        <h5>A Warm Welcome From</h5>
                            <h2>Major Kalshi Health Care!</h2>
                        </div>
                            <div className="messagebydirector">
                           <p>The Major Kalshi Health care has opened in 2019 and we have been thriving to bring to you the best of services available. The main objective of the hospital is to provide appropriate medical facilities of our patients through the modern technology.</p>

<p>We have highly qualified and dedicated team of Doctors, administrative and support staff. We constructed this hospital for all the class of society but our main motto is to provide best facility for the defence students, that a single student can not be get rejected in medical examination due to lack of pre-medical checkup up to the defence standard.</p>

<p>We maintain our hospital as a de-stressing atmosphere and ambience for the patients as well as doctors. Our major focus is to establish ourselves as India’s first Health Care Centre where you will find the treatment of any disease up to the Defence level because we believe that everyone has to fit like the soldier.</p>

<p>We construct this hospital in order to maintain an environment where services and treatment are provided with dignity and respect to all. We will put the patient first and foremost.</p>

<p>This is our commitment and we will do everything possible within our reach to fulfill this commitment.</p>
                            </div>
                        </div>
                    </div>
                </div>
             </section>
             <Services/>
        </>
       
    )
}
export default Director