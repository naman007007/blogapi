import logo from './logo.svg';
import './home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { AiFillDelete } from 'react-icons/ai';
import { AiOutlineClose, AiFillDelete, AiFillEdit } from "react-icons/ai";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Checkbox from "@mui/material/Checkbox";



import React, { useEffect, useState } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;


  
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
function Home() {
  // const [blog ,setBlog] = React.useState([]);
   const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  const logout = () => {
      localStorage.removeItem('token');
  }
  const token = localStorage.getItem('token'); 
  // const allblog = async () => {
  //   try{
  //    const res = await axios.get('http://localhost:3001/blogall');
  //    setBlog(res.data.data)
  //   }catch(error){
  //     console.log(error);
  //   }

  // };
  // React.useEffect(() => {
  //   allblog();
  // },[]);

  // const deleteblog = async (values) => {
  //   try{
  //    let token = localStorage.getItem('token');
  //    const res = await axios.get(`http://localhost:3001/blogdelete?id=${values._id}`,
  //    {header: {token:token}})
  //    setBlog(res.data.data)
  //   }catch(error){
  //     console.log(error);
  //   }
  // };
  // React.useEffect(() => {
  //   allblog();
  // },[]);
  const [blog, Setblog] = React.useState([]); 

  const allblog = async () => {
    try {
      const res = await axios.get("http://localhost:3001/blogall");
      Setblog(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    allblog();
  }, []);

  const deleteblog = async (values) => {
    try {
      let token = localStorage.getItem("token");
      const res = await axios.delete(`http://localhost:3001/blogdelete?id=${values._id}`,
        { headers: { token: token } }
      );
      console.log(res);
      allblog();
    } catch (error) {
      console.log(error);
    }
  };
  return (
   <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <div className='blog'>  
          <Navbar.Brand href="#home">Blog</Navbar.Brand>
        </div>
        <div className='navbar'>
            <a href="">Home</a>
            <Link to='/signup'><a href="">Sign up</a></Link>
            <Link to='/login'><a href="">Log in</a></Link>
            {token ?(<Link to='/post'><a href="">Blog Post</a></Link>) : null}
            <a href="" onClick={logout}>Log out</a>
        </div>
        </Container>
      </Navbar>
      <div className='container-fluid' style={{backgroundColor:'lightgrey'}}>
      <div class="container">
          <div class="row no-gutters justify-content-center slider-text align-items-center" data-scrollax-parent="true">
            <div class="col-md-10 ftco-animate py-5 fadeInUp ftco-animated">
              <h1 class="text-center">Blog</h1>
                <div class="row pb-md-5">
                  <div class="col-md-8">
                    <h2>Hello! I'm Giller Moose, I Provide Newest News Update About Digital</h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  </div>
                  <div class="col-md-4">
                    <div class="author">
                      <div class="img" style={{width:'100%'}}>
                        <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_640/lsci/db/PICTURES/CMS/371600/371612.jpg" style={{height:'99.50%'}} alt="" />
                      </div>
                        <div class="text">
                          <h3>Virat Kohli</h3>
                          <p>Virat Kohli is respectable indian cricketer. He is Captain of indian team. He is the biggest name of indian cricket and all of world.</p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </div>


        <div class="container">
          <div class="row no-gutters slider-text align-items-center justify-content-center">
            <div class="col-md-9 text-center ftco-animate pt-5 fadeInUp ftco-animated">
              <span class="mb-3 bread" >Our Blog</span>
            </div>
          </div>
        </div>
     
        <div className="head">
        <h2 className="h2">Latest articles</h2>
        <hr className="hr" />
        <div className="card-box">
          {
            blog.map((list, index) => {
              return (
              <div className="card1">
                <div className="w-100">
                  <div className="img-box">
                    <a href="" className="img-edit">
                      <img
                        src={`http://localhost:3001/images/${list.image}`}
                        key={list.image}
                        className="img"
                      />
                    </a>

                  </div>
                  <h2>
                    <Link to="/second">
                      <a key={list.title}>{list.title}</a>
                    </Link>
                  </h2>
                  <p className="mar" key={list.description}>{list.description}</p>
                  <div className="mt-3 padd">
                    <div className="d-flex align-items-center">
                      <span className="color-box">
                        <div>u</div>
                      </span>
                      <p
                        style={{ textTransform: "capitalize" }}
                        className="m-0"
                      >
                        <span style={{ paddingLeft: "10px" }}>6 days ago</span>
                      </p>
                      {/* <span className="heart">
                        <FaRegHeart></FaRegHeart>
                      </span> */}
                      <div style={{ padding: "10px" }}>
                        
                        <FormControlLabel
                          control={
                            <Checkbox
                            
                              icon={<FavoriteBorderIcon className="heart" />}
                              checkedIcon={<FavoriteIcon className="heart" />}
                              />
                            }
                          
                        />
                      </div>
                            <p style={{ margin: "0" }}>{index+1}</p>

                      <span className="heart-1">
                        <AiFillDelete
                          onClick={() => deleteblog(list)}
                        ></AiFillDelete>
                      </span>
                      <span className="heart-2">
                        <AiFillEdit
                        ></AiFillEdit>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


        
      
   </>
  );
}

export default Home;
