import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Images/logo.png'
import { Link ,useNavigate } from 'react-router-dom';
import {UserAuth} from "../../context/AuthContext"


const Nav = () => {
  const {user , logout} = UserAuth();
  const navigate =useNavigate();

  const handlelogout = async()=>{

    try {
        await logout();
        navigate("/")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
        <Navbar className='w-100 abb' style={{zIndex:"99"}}>
        <Container className='mt-3 ms-4'>
          <Link to="/">

          <Navbar.Brand >
            <img
              src={logo}
              width="100"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          </Link>
        </Container>

         {
          user?.email ? 
          (<div className='mt-4 me-5 d-flex'>
          <Link to="/account">
            <button className='btn_nav me-4' >Account</button>

          </Link>

          
          
            <button onClick={handlelogout} className='btn_nav' > Log out</button>
          
         </div>) 
         :
         (<div className='mt-4 me-5 d-flex'>
         <Link to="/login">
           <button className='btn_nav me-4' >Sign In</button>

         </Link>

         <Link to="/signup">
         
           <button className='btn_nav' > Sign Up</button>
         </Link>
        </div>)
         }
      </Navbar>
    
    </>
  )
}

export default Nav