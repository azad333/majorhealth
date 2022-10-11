import React from "react";
import Pagetitle from "../Pagetitle";
import Services from "../Home/Services"
import "../Home/Home.css"
const Chairperson =()=>{
    return(
        <>
             <Pagetitle title="Chairperson’s Message" />
             <section className="directormessages">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="directorpic mt-5">
                            <img src="img/chairperson.jpg" alt="Managing Director Message" className="img-fluid" />
                        </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="heading">
                            <h2>Chairperson’s message</h2>
                        </div>
                            <div className="messagebydirector">
                            <p>We think technology plays a vital role for providing best healthcare service and hence we invest in modern technology and equipment to serve our patients very well.</p>

<p>‘The Major Kalshi Classes’ is the only Defense academy in India which conducts the Pre-medical Checkups for the candidates who want to appear for the various defense exams. Being the first in this field, we believe in practice the highest levels of medical ethics for our patient.</p>

<p>Student’s selection in various defence examinations without the failure in medical examination is our highest priority. We give equal treatment to all our patients ranging from the lower to upper class of society. We do not discriminate on the basis of race, cast, class etc.</p>

<p>Our vision is to make the students fit who want to appear for the Defense exams. We are enthusiastic about our visions in maintaining our hospital as a trusted leader in providing high quality healthcare service with modern technology.</p>

<p>We invite you to explore our website and learn more about us. We will be happy to receive your inputs which will help us provide sustained improvements in healthcare sector.

PRE MEDICAL
READ MORE
PATHOLOGY
READ MORE
CONSULTANT
READ MORE
OU</p>
                            </div>
                        </div>
                    </div>
                </div>
             </section>
             <Services/>
        </>
       
    )
}
export default Chairperson