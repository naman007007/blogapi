import React, { useState } from 'react';
import './sign.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import Navbar1 from './navbar';
// import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';



const loginSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Please Enter UserName'),
    password: Yup.string()
        .min(6, 'Minimum 6 Character required')
        .required('Please enter Password'),
});





function Login() {
    const navigate = useNavigate()
    const [loginValue, setLoginValue] = useState({
        username: '',
        password: '',
    })

    const loginuser = async (values) => {
        try {
            
            const res = await axios.post('http://localhost:3001/login', values)
            localStorage.setItem("token",res.data.token);
            navigate('/')
            console.log(res);
          
        } catch (error) {
            
            console.log(error);
        }
    }


    
    return(

        <div className="card-back all">
            <div className="center-wrap">
    
                <div className="section text-center">
                    <Formik
                         initialValues={loginValue}
                         validationSchema={loginSchema}
                        //  enableReinitialize={true}
                        onSubmit={async (values, action) => {
                            console.log(values);
                             
                            await loginuser(values)
                            action.resetForm()
                            setLoginValue({
                                username: '',
                                 password: '',
                             })
                         }}
                       >
                        <Form>
                            <div className='container'>
                            <div className='form'>
                                
                                <h1>Login page</h1>
                                 
                                 <div className="form-group">
                                    <div className='left'>username<ErrorMessage name='username' /></div>
                                    <Field type="text" name="username" className="form-style" placeholder="username" id="username" />
                                     
                                     
                                 </div>
                                 <div className="form-group mt-2">
                                    <div className='left'>Password<ErrorMessage name='password' /></div>
                                    <Field type="password" name="password" className="form-style" placeholder="Your Password" id="password" />
                                    <div className='d-flex justify-content-between mt-1'>
                                    <p className=" text-left">Remember me</p>
                                    <Link to='/'><p className=" text-end"><a href="#0" className="link">Explore Blog?</a></p></Link>
                                    </div>
                                    
                                 
                                 </div>
                                 <button type='submit'  className='btns p-1'>
                                    Sign in
                                </button>
                                 <Link to='/signup'><p className="mb-0 mt-4 text-center">Newcomer here? Join the club!<a href="#0" className="link">register</a></p></Link>
                                 </div>
                                 </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}
export default Login;