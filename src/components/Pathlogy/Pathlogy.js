import React, {useState} from 'react'
import Pagetitle from "../Pagetitle";
import '../Contact/Contact'
import {pricelist} from '../Alldata';
const Pathlogy =() =>{
    return(
        <>
            <Pagetitle title="Pathlogy" />
        <section className='contactform'>
            <div className='container'>
                <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                    <div className='dicpoc'>
                        <img src='img/pathlogypic.png' className='img-fluid' alt="majoe health" />
                    </div>
                    </div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                    <p>We all are aware of this, the pathology is branch of medical Science which deals the study of the causes & effects disease or injury . The Major Kalshi Health Care Center has very experienced and certified lab technicians who give accurate reports to the patients . In this Hospital there is nothing to compromise with, all the things are well mannered and advance in technology.</p>

                    <div className='pathlogypic'>
                        <img src="img/pathlogy.jpg" alt='pathlogy'  className="img-fluid"/>
                    </div>
                    </div>
                    

                  
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                        <div className='mt-5'>
                            <div className='heading text-center'>
                                <h2>List OF The Tests</h2>
                                </div>
                                <table className="table border shadow">
                    <thead style={{background:"#7dc03f", color:"#fff"}}>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Test Name</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {pricelist.map((emp, index) => {
                            const { Name, sr, Price } = emp;
                            return (
                                <tr>
                                    <th scope="row" key={index.id}>{sr}</th>
                                
                                    <td>{Name}</td>
                                    <td>RS {Price} /--</td>
                                   
                                    
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
                            </div>
                        </div>
                </div>

                </div>
        </section>

   
        </>
    )
}
export default Pathlogy;