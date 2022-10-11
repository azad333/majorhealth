import React from 'react';
import './Pagetitle.css';
const Pagetitle=(props)=>{
return(
  <section className='ourPagetitle'>
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <div className='heading text-center'>
                <h1>{props.title}</h1>
                <div className='breadcurmd'>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>{props.currentpage}</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
  </section>
)
}
Pagetitle.defaultProps = {
    title: 'OUR TEAM',
    currentpage:"Team"
  };
export default Pagetitle