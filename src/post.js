// import logo from './logo.svg';
// import './post.css';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// // import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// // import Navbar1 from './navbar';
// import Routee from './router';
// import Home from './home';
// import CloseButton from 'react-bootstrap/CloseButton';
// import { Link } from 'react-router-dom';
// import { Formik, Form } from 'formik';
// import * as Yup from "yup";
// import { TextField } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import React, { useState } from 'react';


// const addblog = Yup.object().shape({
//     title: Yup.string()
//         .min(3, 'Too Short!')
//         .max(50, 'Too Long!')
//         .required('Please enter UserName'),
//     url: Yup.string()
//         .min(6, 'Minimum 6 Character required')
//         .required('Please enter Password'),
// });




// function Post() {

//     const navigate = useNavigate()
//     const [blogValue, setBlogValues] = useState({
//         title: "",
//         url: "",
     
//     })
//     const bloguser = async (values) => {
//         try {
//             const res = await axios.post('http://localhost:3001/adddata', values)
//             localStorage.setItem("token",res.data.token);
//             navigate('/')
//             console.log(res);

//         } catch (error) {
//             console.log(error);
//         }
//     }
//   return (
//     <>
//     <div>
//         <div style={{position:'fixed', top:'0',left:'0',width:'100vw',height:'100vh', zIndex:'1400',opacity:'1'}}>
//             <Home></Home> 
//         </div>
//             <div className='d-flex  cret'>
//                 <div className='d-flex cret-1'> <Link to='/'><CloseButton  style={{right:'0.75rem',position:'absolute',top:'0.5rem'}}/></Link>
//                 <Formik
                    
//                     initialValues={blogValue}
//                     validationSchema={addblog}
//                     // enableReinitialize={true}
//                     onSubmit={async (values, action) => {
//                         console.log(values);

//                         await bloguser(values)
//                         action.resetForm()
//                         setBlogValues({
//                             title: "",
//                             url: "",
//                         })
//                     }}
//                     >

//                     <div className='cret-2'>
//                         <div className='cret-3'>
//                             <div className='cret-4'>
//                                 <h2 className='ed-1'>Add new post</h2>
//                             </div>
//                             <div className='cret-5'>
//                                 <div className='d-flex flex-column'>
//                                     <form action="">
//                                         <div className='w-100 position-relative'>
//                                             <p className='cret-6'>Blog Title</p>
//                                             <input type="text" className='in-ed' style={{borderColor:'rgba(255, 255, 255, 0.16)'}} id='title' />
//                                             <div className='cret-7'>Eg: The Art of Effective Communication</div>
//                                         </div>
//                                         <div className='w-100 position-relative'>
//                                             <p className='cret-6'> Image URL</p>
//                                             <input type="url" className='in-ed' style={{borderColor:'rgba(255, 255, 255, 0.16)'}} id='url' />
//                                             <div className='cret-7'>
//                                                 <a className='ed-2'>Eg: https://picsum.photos/200/300/</a>
//                                                 <div><span>Copy image link by click</span></div>
//                                             </div>
//                                         </div>
//                                         <div className='w-100 position-relative'>
//                                             <p className='cret-6'> Description</p>
//                                             <textarea style={{height:'127.6px',borderColor:'rgba(255, 255, 255, 0.16)'}} placeholder='I know writing can be tough, Just type &quot;blah blah blah&quot; to test things out!' name="" id="" cols="30" rows="10" className='ed-3'></textarea>
//                                         </div>
//                                         <div className='d-flex flex-column'>
//                                             <button className='ed-4'>Hit the Big Blue Button! POST</button>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     </Formik>
//                 </div>
//             </div>
//         </div>
    
  

    

//     </>
    






    
    
//   );
// }

// export default Post;
// import React, { useEffect, useState } from 'react'
// import { useFormik ,Field } from 'formik';
// import * as yup from "yup"
// import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './post.css';


// const Post = () => {

//     const navigate = useNavigate()

//     const newblog = () =>{
//         navigate('/post')
//     }
//     const [Item, setItem] = useState([])

//     const [Create, setCreate] = useState({
//         title: '',
//         description: '',
//         category: '',
//         image: '',
//     })

//     const alldata = async () => {
//         const res = await axios.get("http://localhost:3001/alldata")
//         setItem(res.data.data)
//         console.log(Item);
//     }
//     useEffect(() => {
//         alldata()
//     }, [])

//     const CreatePost = async (values) => {

//         try {
//             let blogform = new FormData();
//             blogform.append("title", values.title)
//             blogform.append("description", values.description)
//             blogform.append("category", values.category)
//             blogform.append("image", values.image)

//             let token = localStorage.getItem('token')
//             const res = await axios.post("http://localhost:3001/blogadd", blogform, {
//                 headers: { "Content-Type": "multipart/form-data", token }
//             })
//             console.log(res);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const formik = useFormik({
//         initialValues: Create,
//         // validationSchema: validationSchema,
//         onSubmit: async (values, action) => {
//             console.log(values);
//             await CreatePost(values)
//             action.resetForm()
//             setCreate({
//                 title: '',
//                 description: '',
//                 category: '',
//                 image: '',
//             })
//         },
//     });
//     return (
//         <div onClick={newblog}>
//         <div className='blogbox justify-center'>
//             <div className='title text-center'>
//                 <h2>Creat Your New Blog</h2>
//             </div>
//             <div className='inputfield text-center'>
//                 {/* <h4>blog title</h4> */}
//                 <form onSubmit={formik.handleSubmit} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
//                     <TextField
//                         id="title"
//                         name="title"
//                         type='title'
//                         style={{
//                             marginBottom: "10px",
//                             width: '400px'
//                         }}
//                         placeholder='Blog Title'
//                         value={formik.values.title}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={formik.touched.title && Boolean(formik.errors.title)}
//                         helperText={formik.touched.title && formik.errors.title}
//                     />
//                     <TextField
//                         id="description"
//                         name="description"
//                         placeholder='Description'
//                         style={{
//                             marginBottom: "10px",
//                             width: '400px'
//                         }}
//                         multiline
//                         rows={4}
//                         type="description"
//                         // defaultValue="default value"
//                         value={formik.values.description}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={formik.touched.description && Boolean(formik.errors.description)}
//                         helperText={formik.touched.description && formik.errors.description}
//                     />
                
//                     <FormControl fullWidth style={{width:"400px"}} sx={{margin:"10px 0px" , textAlign:"left"}}>
//                         <InputLabel id="category">Category</InputLabel>
//                         <Select
//                         labelId='category'
//                         id="category"
//                         name='category'
//                         // placeholder='category'
//                         label=' category'
//                         value={formik.values.category}
//                         onChange={(e) => formik.setFieldValue("category" , e.target.value)}
//                         onBlur={formik.handleBlur}
//                         error={formik.touched.category && Boolean(formik.errors.category)}
//                         helperText={formik.touched.category && formik.errors.category}
//                         >
//                             <MenuItem value={""}>Please Select Category</MenuItem>
//                             {
//                                 Item.map((cat) => {
//                                     return <MenuItem value={cat._id}>{cat.name}</MenuItem>
//                                 })
//                             }
//                         </Select>
//                     </FormControl>
                    
//                     <TextField
//                         id="image"
//                         name="image"
//                         // placeholder='Image URL'
//                         style={{
//                             marginBottom: "10px",
//                             width: '400px'
//                         }}
//                         type="file"
//                         onChange={(event) => formik.setFieldValue('image', event.target.files[0])}
//                         // value={formik.values.imgurl}
//                         // onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={formik.touched.imgurl && Boolean(formik.errors.imgurl)}
//                         helperText={formik.touched.imgurl && formik.errors.imgurl}
//                     />

//                     <Button color="success" style={{ margin: '15px' }} variant="contained" type="submit">
//                         post
//                     </Button>
//                 </form>
//             </div>
//         </div>
//         </div>
//     )
// }

// export default Post;




import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navba from "./nav";
import Carousel from "react-bootstrap/Carousel";
import { AiOutlineClose, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import './post.css';
// import Button from "react-bootstrap/Button";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
// import TextField from '@material-ui/core/TextField';

const Post = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  const [category, Setcategory] = useState([]);
  const [create, Setcreate] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
  });

  const alldata = async () => {
    const res = await axios.get("http://localhost:3001/alldata");
    console.log(res);
    Setcategory(res.data.data);
  };
  useEffect(() => {
    alldata();
  }, []);

  const Creatpost = async (values) => {
    try {
      let blogform = new FormData();
      blogform.append("title", values.title);
      blogform.append("description", values.description);
      blogform.append("category", values.category);
      blogform.append("image", values.image);
      let token = localStorage.getItem("token");
      const res = await axios.post("http://localhost:3001/blogadd", blogform, {
        headers: { "Content-Type": "multipart/form-data", token },
      

      });
      handleClose();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: create,
    // validationSchema: validationSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      await Creatpost(values);
      action.resetForm();
      handleClose();
      Setcreate({
        title: "",
        description: "",
        category: "",
        image: "",
      });
    },
  });

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.48)",
          zIndex: "0",
          opacity: "1",
        }}
      >
       
      </div>

      <div className="d-flex  cret">
        <div className="d-flex cret-1">
          <Link to="/">
            <button className="bu-ed" variant="secondary" onClick={handleClose}>
              <AiOutlineClose style={{ fontSize: "15px" }}></AiOutlineClose>
            </button>
          </Link>
          <div className="cret-2">
            <div className="cret-3">
              <div className="cret-4">
                <h2 className="ed-1">Add new post</h2>
              </div>
              <div className="cret-5">
                <div className="d-flex flex-column">
                  <form onSubmit={formik.handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <TextField
                      id="title"
                      className="cret-6"
                      name="title"
                      type="title"
                      style={{
                        marginBottom: "10px",
                        width: "400px",
                      }}
                      placeholder="Blog Title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.title && Boolean(formik.errors.title)
                      }
                      helperText={formik.touched.title && formik.errors.title}
                    />
                    <TextField
                      id="description"
                      className="cret-6"
                      name="description"
                      placeholder="Description"
                      style={{
                        marginBottom: "10px",
                        width: "400px",
                      }}
                      multiline
                      rows={4}
                      type="description"
                      // defaultValue="default value"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.description &&
                        Boolean(formik.errors.description)
                      }
                      helperText={
                        formik.touched.description && formik.errors.description
                      }
                    />

                    <FormControl
                      fullWidth
                      style={{ width: "400px" }}
                      sx={{ margin: "10px 0px", textAlign: "left" }}
                    >
                      <InputLabel id="category">Category</InputLabel>
                      <Select
                        // labelId="category"
                        id="category"
                        name="category"
                        // placeholder='category'
                        label=" category"
                        value={formik.values.category}
                        onChange={(e) =>
                          formik.setFieldValue("category", e.target.value)
                        }
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.category &&
                          Boolean(formik.errors.category)
                        }
                        helperText={
                          formik.touched.category && formik.errors.category
                        }
                      >
                        <MenuItem value={""}>Please Select Category</MenuItem>
                        {category.map((cat) => {
                          return (
                            <MenuItem key={cat._id} value={cat._id}>
                              {cat.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>

                    <TextField
                      id="image"
                      name="image"
                      className="cret-6"
                      // placeholder='Image URL'
                      style={{
                        marginBottom: "10px",
                        width: "400px",
                      }}
                      type="file"
                      onChange={(event) =>
                        formik.setFieldValue("image", event.target.files[0])
                      }
                      // value={formik.values.imgurl}
                      // onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.imgurl && Boolean(formik.errors.imgurl)
                      }
                      helperText={formik.touched.imgurl && formik.errors.imgurl}
                    />
                    <div style={{display:'flex',justifyContent:'center'}}>
                    <Button
                      color="success"
                      style={{ margin: "15px",padding:'15px 100px' }}
                      variant="contained"
                      type="submit"
                    >
                      post
                    </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;