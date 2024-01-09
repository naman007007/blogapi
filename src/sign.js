import React, { useState } from 'react';
import './App.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Navbar1 from './navbar';




const signUpSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Please enter UserName'),
    password: Yup.string()
        .min(6, 'Minimum 6 Character required')
        .required('Please enter Password'),
});


function Signup() {
   
    const navigate = useNavigate()
    const [signUpValue, setSignUpValues] = useState({
        username: "",
        password: "",
     
    })
    
    const signuser = async (values) => {
        try {
            const res = await axios.post('http://localhost:3001/signup', values)
            localStorage.setItem("token",res.data.token);
            navigate('/')
            console.log(res);

        } catch (error) {
            console.log(error);
            
        }
    }
    return(
        <div className='all' >
            
        <div className="card-back">
            <div className="center-wrap">
                <div className="section text-center">
                    <Formik
                    
                    initialValues={signUpValue}
                    validationSchema={signUpSchema}
                    // enableReinitialize={true}
                    onSubmit={async (values, action) => {
                        console.log(values);

                        await signuser(values)
                        action.resetForm()
                        setSignUpValues({
                            username: "",
                            password: "",
                           
                        })
                    }}
                    >

                        <Form>
                            <div className='container'>
                                 
                            <div className='form'>
                            <h4 className=" weight top">Come on in!</h4>
                                 <h4 className='mb-4 pb-3 clr'>Sign up and receive virtual high-fives ✋</h4>
                          
                                 <div className="form-group">
                                    <div className='left'>username<ErrorMessage name='username' /></div>
                                    <Field type="text" name="username" className="form-style pad" placeholder="Your User Name" id="username" />
                                     
                                     
                                </div>
                               
                                 <div className="form-group">
                                    <div className='left'>Password<ErrorMessage name='password' /></div>
                                    <Field type="password" name="password" className="form-style pad" placeholder="Your Password" id="password" />
                                    <div className='d-flex justify-content-between mt-1'>
                                    <p className=" text-left">Remember me</p>
                                    <p className=" text-end"><a href="#0" className="link">Explore Blog?</a></p>
                                    </div>
                                    
                                 
                                 </div>
                                 <button type='submit'  className='btns p-1'>
                                    Sign in
                                </button>
                                 <Link to='/login'><p className="mb-0 mt-4 text-center">Newcomer here? Join the club!<a href="#0" className="link">Login</a></p></Link>
                                 </div>
                                 </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Signup;