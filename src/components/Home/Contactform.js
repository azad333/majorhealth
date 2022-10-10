import React, {useState} from 'react'
//import axios from 'axios';
const Cotnactform =() =>{
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
        
        <section className='getintouch'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                        <div className='contactmaine'>
                            <div className='heading text-center'>
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
      
                    <div className='col-lg-5 col-md-5 col-sm-12 col-12 offset-lg-1 offset-md-1'>
                    <div className='contactpic'>
                        <img src='img/contactpic.jpg' className='img-fluid' alt="contact" />
                    </div>
                    </div>
                </div>
                </div>
        </section>
    )
}
export default Cotnactform;