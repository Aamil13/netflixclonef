import { Button } from 'bootstrap'
import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "./pages.css"

import {UserAuth} from "../context/AuthContext"
import { useState } from 'react'
import { async } from '@firebase/util'

const Signup = () => {

    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const {user , signUp} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
            e.preventDefault();

            try {
                await signUp(email , password);
                navigate("/")
            } catch (error) {
                console.log(error);
            }
    }

  return (
    <div  style={{height:"100vh",width:"100vw"}}>
        <img className='imgg' src="https://assets.nflxext.com/ffe/siteui/vlv3/701eec50-4b87-4dc0-9d00-b0f54025dc36/028e62d2-2a59-4fc3-adaa-a0756a0512b9/IN-en-20220905-popsignuptwoweeks-perspective_alpha_website_large.jpg"
         alt="/" />

         <div className='w-100 d-flex justify-content-center   sboxm'>
            <div className='bg-black  sbox'>
                <div className='mx-auto'>
                    <h1 className='fw-bold text-center py-5' >Sign Up</h1>
                    <form onSubmit={handleSubmit} className=' formm'>
                        <input onChange={(e)=>setEmail(e.target.value)} className='inp' type="email" placeholder='E-mail' autoComplete='email' /><br/>
                        <input onChange={(e)=>setPassword(e.target.value)} className='inp' type="password" placeholder='Password'  />
                        <button className='btnf '>Sign up</button>
                        <div className='d-flex justify-content-between mt-3 text-center'>
                        <p><input type="checkbox"  /> Remember me</p>
                        <p className=''>need help?</p>
                        </div>
                        <p className='pt-2'>
                            <span>
                                Already subscribed to Netflix?
                            </span>{" "}
                            <Link to='/login'>Sign in</Link>
                        </p>
                    </form>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Signup