import React from 'react'
import SavedList from '../Component/savedlist/SavedList'


const Account = () => {
  return (
    <div style={{height:"100vh",width:"100vw"}}>

        <img className='imgg h-50' src="https://assets.nflxext.com/ffe/siteui/vlv3/701eec50-4b87-4dc0-9d00-b0f54025dc36/028e62d2-2a59-4fc3-adaa-a0756a0512b9/IN-en-20220905-popsignuptwoweeks-perspective_alpha_website_large.jpg"
         alt="/" />

         <div className='w-100 h-100 position-fixed bg-black opacity-50'>
          <h1 className='opacity-100 text-light position-absolute' style={{left:"40px",top:"250px" }}>My List</h1>

         
         </div>

        <SavedList/>
    </div>
  )
}

export default Account