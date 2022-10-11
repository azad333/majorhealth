import React from "react";
import Pagetitle from "../Pagetitle";
import Services from "../Home/Services"
import "../Home/Home.css"
const Mdmessage =()=>{
    return(
        <>
             <Pagetitle title="Managing Director Message" />
             <section className="directormessages">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="directorpic mt-5">
                            <img src="img/somesh.jpg" alt="Managing Director Message" className="img-fluid" />
                        </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="heading">
                            <h5>I Welcome All The Visitors To The </h5>
                            <h2>Official Portal Of Major Kalshi Healthcare!</h2>
                        </div>
                            <div className="messagebydirector">
                            <p>Our motto is to “Service for the Humanity, is a Service of God ", keeping this motto in mind we have started this Hospital for the needy people, here we have been giving the best possible treatment to our patients through the modern technology and facilities.</p>

<p>Social responsibility and philosophy of serving the patients are the primary factors in starting up this hospital. We at Major Kalshi health care offer a personal touch rather than a commercial touch when it comes to patient care.</p>

<p>Our greatest strength is our staff like Doctors, qualified Nurses and Technicians who all are from the defence background. To ensure that all our patients receive the best medical care, we have modernized our hospitals with recent technologies in health care sectors.</p>

<p>We are energized by our vision of making a significant contribution in turning this region into a global healthcare hub. We aspire to be the preferred healthcare destination globally and a brand of choice within Allahabad.</p>
                            </div>
                        </div>
                    </div>
                </div>
             </section>
             <Services/>
        </>
       
    )
}
export default Mdmessage