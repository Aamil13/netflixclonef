import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "./pages.css"
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'



const Login = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const {logIn , user} = UserAuth();
    const [error , setError]= useState("")

    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError('')

        try {
            await logIn(email , password);
            navigate("/")
            
        } catch (error) {
            console.log(error);
            setError(error.message)
        }
}

  return (
    <div  style={{height:"100vh",width:"100vw"}}>
        <img className='imgg' src="https://assets.nflxext.com/ffe/siteui/vlv3/701eec50-4b87-4dc0-9d00-b0f54025dc36/028e62d2-2a59-4fc3-adaa-a0756a0512b9/IN-en-20220905-popsignuptwoweeks-perspective_alpha_website_large.jpg"
         alt="/" />

         <div className='w-100 d-flex justify-content-center   sboxm'>
            <div className='bg-black  sbox'>
                <div className='mx-auto'>
                    <h1 className='fw-bold text-center py-5' >Log In</h1>
                    {error ? <p className='ms-5 text-danger'>{error}</p> : null}
                    <form onSubmit={handleSubmit} className=' formm'>
                        <input onChange={(e)=> setEmail(e.target.value)} className='inp' type="email" placeholder='E-mail' autoComplete='email' /><br/>
                        <input onChange={(e)=>setPassword(e.target.value)} className='inp' type="password" placeholder='Password'  />
                        <button className='btnf '>Log In</button>
                        <div className='d-flex justify-content-between mt-3 text-center'>
                        <p><input type="checkbox"  /> Remember me</p>
                        <p className=''>need help?</p>
                        </div>
                        <p className='pt-2'>
                            <span>
                                New to Netflix?
                            </span>{" "}
                            <Link to='/signup'>Sign UP</Link>
                        </p>
                    </form>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Login