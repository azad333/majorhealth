import React, {useState} from 'react'
import Pagetitle from "../Pagetitle";
import './Contact.css'
const Contact =() =>{
    const[user, setUser]= useState({
        name:"",
        email:"",
        contact:"",
        statename:"",
        msg:"",
        });

        const{name, email, contact, statename, msg} = user
        const onChange=(e)=>{
            setUser({...user, [e.target.name]:[e.target.value]})
        }
    return(
        <>
            <Pagetitle title="CONTACT" />
        <section className='contactform'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 col-md-7 col-sm-12 col-12'>
                        <div className='contactforms'>
                            <div className='heading'>
                                <h2>Book An Appointment</h2>
                                <p>Looking for Medical Health support? <br/>
Major Kalshi Health Care is right here for you!</p>
</div>
                                <form action="#" name='getintouch'>
                            <div className='row'>
                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="name" 
                                name="name"
                                value={name}  
                                onChange={e=>onChange(e)}
                                placeholder="Enter your name" />
                            </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="email" className="form-control" 
                                id="email" 
                                name="email"
                                value={email}
                                onChange={e=>onChange(e)}
                                placeholder="Enter Your Email Address" />
                            </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="number" className="form-control" 
                                id="contact" 
                                name="contact"
                                value={contact} 
                                onChange={e=>onChange(e)}
                                placeholder="Enter Your Contact Number" />
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                               <input type="text" className="form-control" 
                                id="statename" 
                                name="statename"
                                value={statename} 
                                onChange={e=>onChange(e)}
                                placeholder="Enter Your State Name" />
                            </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-12 col-12'>
                                <div className="form-group">
                                <textarea className='form-control'
                                    value={msg}
                                    id="msg"
                                    name="msg"
                                    onChange={e=>onChange(e)}
                                    placeholder='Write Your Message'>
                                </textarea>
                            </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-12 col-12'>
                                <button type='submit' className='btn primarybg text-white text-uppercase fw-bold w-100' value="Write Your Subject">Write Your Subject</button>
                                </div>
                                </div>
                        </form>
                            </div>
                        </div>
      
                    <div className='col-lg-5 col-md-5 col-sm-12 col-12'>
                    <div className='contectdetails'>
                        <img src='img/contactpic.jpg' className='img-fluid' alt="contact" />
                        <div className='contactinfo'>
                        <h2>Contact Us For Any Informations</h2>
                        <ul className="contact-info">
    <li>
        <div className="icon-box">
            <div className="inner">
                <i className="fa fa-map-marker"></i>
            </div>
        </div>
        <div className="content-box">
            <h4>Address</h4>
            <p>Hashimpur Road Near Royal Enfeild Show Room Prayagraj - 211002</p>
        </div>
    </li>
    <li>
        <div className="icon-box">
            <div className="inner">
                <i className="fa fa-phone"></i>
            </div>
        </div>
        <div className="content-box">
            <h4>Phone</h4>
            <p>(+91)-6390103030, 6390103030, 6390103030</p>
        </div>
    </li>
    <li>
        <div className="icon-box">
            <div className="inner">
                <i className="fa fa-envelope-o"></i>
            </div>
        </div>
        <div className="content-box">
            <h4>Email</h4>
            <p><a href="mailto:mkh@majorkalshiclasses.com">mkh@majorkalshiclasses.com</a>
                <a href="mailto:healthcaremajorkalshi@gmail.com">healthcaremajorkalshi@gmail.com</a></p>
        </div>
    </li>
    <li>
    <div className="icon-box">
            <div className="inner">
                <i className="fa fa-globe"></i>
            </div>
        </div>
        <div className="content-box">
        <h4>Follow Us on</h4>
        <ul className='socialslinks'>
    <li><a href='/'><i className='fa fa-facebook'></i></a></li>
    <li><a href='/'><i className='fa fa-twitter'></i></a></li>
    <li><a href='/'><i className='fa fa-instagram'></i></a></li>
    <li><a href='/'><i className='fa fa-linkedin'></i></a></li>
</ul>
</div>
    </li>
</ul> 
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </section>

        <section className='contacrdetails'>
        
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14409.454617710062!2d81.86432189999998!3d25.45952980000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3532312ecd2631a!2sMAJOR%20KALSHI%20HEALTH%20CARE%20CENTRE!5e0!3m2!1sen!2sin!4v1577364291688!5m2!1sen!2sin" ></iframe>
          
        </section>
        </>
    )
}
export default Contact;