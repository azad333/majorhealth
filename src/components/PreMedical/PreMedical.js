import React, {useState} from 'react'
import Pagetitle from "../Pagetitle";
import '../Contact/Contact'
import './Premedical.css'
const PreMedical =() =>{
    const[user, setUser]= useState({
        name:"",
        fathername:"",
        mothername:"",
        sex:"",
        age:"",
        address:"",
        height:"",
        weight:"",
        BMI:"",
        chest:"",
        inspiration:"",
        pulse:"",
        respiratory:"",
        hydrocele:"",
        piles:"",
        vision:"",
        blood:"",
        Colour:"",
        hernia:"",
        ENT:"",
        Chest_meassurment:"",
        CBC:"",
        CVS:"",
        spine:"",
        Abdomen:"",
        Dental:"",
        mental:"",
        surgery:"",
        hyperhydrosis:"",
        skin:"",
        fits:"",
        tattoo :"",
        CEG:"",
        Follow:"",
       
        Urine:"",
        remark:{
            palce:"",
            date:"",
            signature:"",
        }

        });

        const{name,  sex,age, mothername, fathername, address, height,weight,BMI, chest, inspiration,pulse, respiratory, hydrocele, piles,vision,blood,Colour,hernia,ENT,Chest_meassurment,CBC,CVS,spine,Abdomen,Dental,mental,surgery,hyperhydrosis,skin,fits,tattoo ,CEG,Follow,Urine,palce, date, signature  } = user
        const onChange=(e)=>{
            setUser({...user, [e.target.name]:[e.target.value]})
        }
    return(
        <>
            <Pagetitle title="Pre Medical" />
        <section className='contactform'>
            <div className='container'>
                <div className='row'>
                
                <div className='col-lg-7 col-md-7 col-sm-12 col-12'>
                    <p>If you are defense Aspirant and have dream of joining the Indian Armed forces as an officer or as a soldier. You will have to be physically and mentally fit. If you clear all phases of selection but couldn’t qualify and medical or physical test, you may get permanent rejected. It is always better to have pre medical test before appearing or starting preparation for the defense Exams. The pre medical is basically test, in which the doctors or technicians do the complete check-ups of the body and made a report of problems.</p>

<p>The Major Kalshi classes are a defense coaching Institute which is known as the best defense coaching in India. This Institute has its own publication of books and own hospital for the complete body checkups and treatment of the students. The students who join the Major kalshi classes they can avail body checkups service by the MKC Hospitals and if any minor problem occurs which can be corrected, the treatment of that students will be done in the MKC hospital if he/she wants. All the tests in this Hospital are done by the Military Doctors and under the guidance of the defense officers</p>

<p>This is very great step by any coaching institute, most of the candidates prepares so good and clear all the phases of selection but at the end they couldn’t clear the medical test. Which is very heart breaking for anyone. If you have dream of joining the Indian Armed forces it is always better to have done Pre Medical test before joining any Institute for the preparation. If you are not from the Major Kalshi classes, then too you can apply for the Pre medical tests. To know more about this or how to apply, go to the official website of the major Kalshi classes.</p>

<p>Join Major Kalshi Classes for complete preparation of NDA/NA, CDS, AFCAT, CAPF, ACC, Military Nursing Service, Air Force X & Y Groups, Indian Navy AA & SSR, Indian Coast Guard, Army GD/Clerk/Tech/NA/ SSC GD, PFT, GD, SRT and SSB INTERVIEW.</p>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-12 col-12'>
                    <div className='dicpoc'>
                        <img src='img/doctorji.jpg' className='img-fluid' alt="majoe health" />
                    </div>
                    </div>

                  
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                        <div className='contactforms mt-5'>
                            <div className='heading text-center'>
                                <h2>Our certificate looks like this</h2>
                                <p>Medical Check-up out at Major Kalshi Helath Care Center</p>
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
                                placeholder="Name of the candidate" />
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="fathername" 
                                name="fathername"
                                value={fathername}  
                                onChange={e=>onChange(e)}
                                placeholder="Enter your father name" />
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="mothername" 
                                name="mothername"
                                value={mothername}  
                                onChange={e=>onChange(e)}
                                placeholder="Enter your mother name" />
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="sex" 
                                name="sex"
                                value={sex}  
                                onChange={e=>onChange(e)}
                                placeholder="Sex" />
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <select id="age"  className="form-control" 
                                name="age"
                                value={age}  
                                onChange={e=>onChange(e)}> 
                                <option value="">Age</option>
                                <option valu="20">20</option>
                                </select>
                            </div>
                                </div>
                                

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="address" 
                                name="address"
                                value={address}  
                                onChange={e=>onChange(e)}
                                placeholder="Write your address" />
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <select id="height" className="form-control" 
                                name="height"
                                value={height}  
                                onChange={e=>onChange(e)}> 
                                <option value="">Height</option>
                                <option valu="20">5'ft</option>
                                </select>
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <select id="weight" className="form-control" 
                                name="weight"
                                value={weight}  
                                onChange={e=>onChange(e)}> 
                                <option value="">Weight</option>
                                <option valu="20">48Kg</option>
                                </select>
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="BMI" 
                                name="BMI"
                                value={BMI}  
                                onChange={e=>onChange(e)}
                                placeholder="BMI" />
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="chest" 
                                name="chest"
                                value={chest}  
                                onChange={e=>onChange(e)}
                                placeholder="Chest" />
                            </div>
                                </div>
                                
                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="inspiration" 
                                name="inspiration"
                                value={inspiration}  
                                onChange={e=>onChange(e)}
                                placeholder="Inspiration" />
                            </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="pulse" 
                                name="pulse"
                                value={pulse}  
                                onChange={e=>onChange(e)}
                                placeholder="Pulse" />
                            </div>
                                </div> 

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="respiratory" 
                                name="respiratory"
                                value={respiratory}  
                                onChange={e=>onChange(e)}
                                placeholder="Respiratory" />
                            </div>
                                </div> 

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="hydrocele" 
                                name="hydrocele"
                                value={hydrocele}  
                                onChange={e=>onChange(e)}
                                placeholder="Hydrocele" />
                            </div>
                                </div>
                                
                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="piles" 
                                name="piles"
                                value={piles}  
                                onChange={e=>onChange(e)}
                                placeholder="Piles" />
                            </div>
                                </div> 

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="vision" 
                                name="vision"
                                value={vision}  
                                onChange={e=>onChange(e)}
                                placeholder="Vision" />
                            </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="blood" 
                                name="blood"
                                value={blood}  
                                onChange={e=>onChange(e)}
                                placeholder="Blood" />
                            </div>
                                </div> 

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="Colour" 
                                name="Colour"
                                value={Colour}  
                                onChange={e=>onChange(e)}
                                placeholder="Colour" />
                            </div>
                                </div>


                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="hernia" 
                                name="hernia"
                                value={hernia}  
                                onChange={e=>onChange(e)}
                                placeholder="Hernia" />
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="ENT" 
                                name="ENT"
                                value={ENT}  
                                onChange={e=>onChange(e)}
                                placeholder="ENT" />
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="Chest_meassurment" 
                                name="Chest_meassurment"
                                value={Chest_meassurment}  
                                onChange={e=>onChange(e)}
                                placeholder="Chest meassurment" />
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="CBC" 
                                name="CBC"
                                value={CBC}  
                                onChange={e=>onChange(e)}
                                placeholder="CBC" />
                            </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="CVS" 
                                name="CVS"
                                value={CVS}  
                                onChange={e=>onChange(e)}
                                placeholder="CVS" />
                            </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="spine" 
                                name="spine"
                                value={spine}  
                                onChange={e=>onChange(e)}
                                placeholder="Musculosketetal system/ Spine/ Flat foot/ KNock Knee" />
                            </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="Abdomen" 
                                name="Abdomen"
                                value={Abdomen}  
                                onChange={e=>onChange(e)}
                                placeholder="Abdomen" />
                            </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="Dental" 
                                name="Dental"
                                value={Dental}  
                                onChange={e=>onChange(e)}
                                placeholder="Dental" />
                            </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="mental" 
                                name="mental"
                                value={mental}  
                                onChange={e=>onChange(e)}
                                placeholder="Mental break down" />
                            </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="surgery" 
                                name="surgery"
                                value={surgery}  
                                onChange={e=>onChange(e)}
                                placeholder="Past history of any surgery" />
                            </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="hyperhydrosis" 
                                name="hyperhydrosis"
                                value={hyperhydrosis}  
                                onChange={e=>onChange(e)}
                                placeholder="hyperhydrosis" />
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="skin" 
                                name="skin"
                                value={skin}  
                                onChange={e=>onChange(e)}
                                placeholder="skin disease" />
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="tattoo" 
                                name="tattoo"
                                value={tattoo}  
                                onChange={e=>onChange(e)}
                                placeholder="Any tattoo marks" />
                            </div>
                                </div>


                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="CEG" 
                                name="CEG"
                                value={CEG}  
                                onChange={e=>onChange(e)}
                                placeholder="CEG" />
                            </div>
                                </div>


                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="Follow" 
                                name="Follow"
                                value={Follow}  
                                onChange={e=>onChange(e)}
                                placeholder="Follow" />
                            </div>
                                </div>


                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="Urine" 
                                name="Urine"
                                value={Urine}  
                                onChange={e=>onChange(e)}
                                placeholder="Urine Test" />
                            </div>
                                </div>

                                <label>Remarks</label>
                                
                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="palce" 
                                name="palce"
                                value={palce}  
                                onChange={e=>onChange(e)}
                                placeholder="palce" />
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="date" 
                                name="date"
                                value={date}  
                                onChange={e=>onChange(e)}
                                placeholder="Date" />
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                <div className="form-group">
                                <input type="text" className="form-control" 
                                id="signature" 
                                name="signature"
                                value={signature}  
                                onChange={e=>onChange(e)}
                                placeholder="signature" />
                            </div>
                                </div>

                                <div className='col-lg-6 col-12'>
                                    <p>NOTE: Health status screening only, and not for any medical legal purpose or claim</p>
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
                </div>

                </div>
        </section>

   
        </>
    )
}
export default PreMedical;