import React, {useEffect} from 'react'
import "../../Pages/pages.css"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { UserAuth } from '../../context/AuthContext'
import { db } from '../../firebase'
import { updateDoc,doc , onSnapshot } from 'firebase/firestore'
import { useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"

const SavedList = () => {

    const {user} = UserAuth();
    const [movies , setMovies] = useState([])

    const left=()=>{
        let slider = document.getElementById("slider" );
        slider.scrollLeft = slider.scrollLeft - 500;
      }
      const right=()=>{
        let slider = document.getElementById("slider" );
        slider.scrollLeft = slider.scrollLeft + 500;
      }

      useEffect(() => {
        
        onSnapshot(doc(db,"users", `${user?.email}`),(doc)=>{
            setMovies(doc.data()?.savedshows);
        })
        
      }, [user?.email])

      const movieRef = doc(db,"users",`${user?.email}`)
      const deleteShow = (passedID) =>{
        try {
            const result = movies.filter((item)=>item.id !==passedID);
             updateDoc(movieRef,{
                savedshows:result,
            })
        } catch (error) {
            console.log(error);
        }
      }


  return (
    <>

        <div className='savedll '>
        <h2 className='Row ms-2'>List </h2>
    
    
    <div className='relative d-flex align-content-center showih  '>
      <FaChevronLeft className='position-absolute top-50 z ' size={40}
      onClick={left}
      />
      
        
      
      <div id={'slider'} className="slider" >
        {movies.map((item , i)=>(
          
          <div key={i} className='d-inline-block p-2' style={{width:"160px", position:'relative',cursor:'pointer'}}>
            <img className='img-fluid d-block w-100 ' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title}/>
          <div className='absolu'>
            <p className=' text-center pt-5'>{item.title}</p>
            <p onClick={()=>deleteShow(item.id)} className='position-absolute xx'><AiOutlineClose/></p>
          </div>
          </div>
          
        ))}
        </div>


      
          <FaChevronRight className='position-absolute top-50 z zdown' size={40}
          onClick={right}
          />
         
    </div>
     

        </div>

    </>
  )
}

export default SavedList