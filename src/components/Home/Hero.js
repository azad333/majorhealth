import React from 'react';
const Hero =()=> {
  return (
   <>
<section className='topbanner'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
            <div className='aligne-item-center'>
                <div className='valign'>
                <h5>Welcome to Major Kalshi Health Care</h5>
                <h1>We Take Care Of Your <span>Healthy Health</span></h1>
                <a href="/*" className='text-uppercase btn primarybg text-white'>Explorer more</a>
                </div>
            </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
            <img src='img/heropic.png' className='img-fluid' alt='major health'></img>
            </div>
        </div>
    </div>
</section>
   </>
  )
}

export default Hero


