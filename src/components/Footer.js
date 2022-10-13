import React from 'react';
import './Footer.css';
const Footer =() =>{
    return(
   <footer>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
             <div className='footerthumb'>
             <img src='img/logo.png' className='img-fluid' alt="major health classes" />
                <p>Text Back-up at your fingerprints 
Hire Professional Transcriptionists </p>
<ul className='socialslinks'>
    <li><a href='/'><i className='fa fa-facebook'></i></a></li>
    <li><a href='/'><i className='fa fa-twitter'></i></a></li>
    <li><a href='/'><i className='fa fa-instagram'></i></a></li>
    <li><a href='/'><i className='fa fa-linkedin'></i></a></li>
</ul>
             </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
             <div className='footerthumb'>
             <div className='navtitle'>Navigation</div>
             <ul className='navmenu'>
                <li><a href='/'>About Us</a></li>
                <li><a href='/'>Employee Login</a></li>
                <li><a href='/'>How Can we Help You</a></li>
                <li><a href='/'>Doctors Login</a></li>
                <li><a href='/'>Patient Login</a></li>
             </ul>
             </div>
             </div>
             <div className='col-lg-2 col-md-2 col-sm-6 col-12'>
             <div className='footerthumb'>
             <div className='navtitle'>Services</div>
             <ul className='navmenu'>
                <li><a href='/'>Pre Medical</a></li>
                <li><a href='/'>Pathlogy</a></li>
                <li><a href='/'>Consultant</a></li>
                <li><a href='/'>Our Team</a></li>
                <li><a href='/'>Gallery</a></li>
             </ul>
             </div>
             </div>
             <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
             <div className='footerthumb'>
             <div className='navtitle'>Get In Touch</div>
             <ul className='getintch'>
                <li><a href='mailto:majorkalshihealthcare@gmail.com'><i className="fa fa-envelope"></i>majorkalshihealthcare@gmail.com</a></li>
                <li><a href='/'><i className="fa fa-map-marker"></i>25/35 Hashimpur Road
Near Royal Enfeild Show Room Prayagraj</a></li>
                <li><a href='/'><i className="fa fa-phone"></i>(+91)-6390103030, 6390103030, 6390103030</a></li>
             </ul>
             </div>
             </div>
        </div>
    </div>
    <div className='copyright'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7 col-md-7 col-sm-12 col-12'>
                    <p>Copyright © 2019 Major Kalshi Health Care Center, All Right Reserved.</p>
                </div>
                <div className='col-lg-5 col-md-5 col-sm-12 col-12'>
                    <ul>
                        <li><a href='/'>Terms & conditions</a></li>
                        <li><a href='/'>Privacy Policy</a></li>
                        <li><a href='/'>Sitemap</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   </footer>
    )
}
export default Footer;