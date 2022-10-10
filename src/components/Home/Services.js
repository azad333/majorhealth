import React from 'react';
import {majorservices} from '../Alldata';
const Services =()=> {
  return (
   <>
<section className='ourservices'>
    <div className='container'>
        <div className='row'>
        <div className='col-12'>
            <div className='heading text-center'>
                <h2>What we are offering?</h2>
                <h5>Caring for the whole patient, not just your symptoms</h5>
            </div>
        </div>

   
          {majorservices.map((allservices)=>{
            const{servicesname,servicesicon, shortdiscription,  weburls, count, active} = allservices; 
            
            return(
                
                <div className="col-lg-4 col-sm-12 col-12" key={allservices.id}>
                    <div className={`servicesthumbnail ${active}`}>
                    <div className='countno seciondaryfont'>{count}</div>
                       <div className='servicesicn'> <img src={servicesicon} alt={servicesname} className="img-fluid" /></div>
                        <h3><a href="/" className='primarycolor'>{servicesname}</a></h3>
                        <p>{shortdiscription}</p>
                        <a href={weburls} className="btn primarybg text-white">Explorer More <span><i className='fa fa-angle-right'></i></span></a>
                    </div>
                </div>
             
            )
          })} 
          </div>
    </div>   
</section>
   </>
  )
}

export default Services


