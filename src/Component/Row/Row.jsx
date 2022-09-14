import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './Row.css'
import Movie from './Movie'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'








const Row = ({title , fetchUrl , rowId}) => {

  

    const [movies,setMovies]= useState([])
    

    useEffect(()=>{
            axios.get(fetchUrl).then((response)=>{
                // const {data:{results}} = response
                setMovies(response.data.results)
            })
            
            
    },[fetchUrl])
    // console.log(movies);

    const left=()=>{
      let slider = document.getElementById("slider" + rowId);
      slider.scrollLeft = slider.scrollLeft - 500;
    }
    const right=()=>{
      let slider = document.getElementById("slider" + rowId);
      slider.scrollLeft = slider.scrollLeft + 500;
    }



  return (
    <>
    
    <h2 className='Row ms-2'>{title}</h2>
    
    
    <div className='relative d-flex align-content-center showih '>
      <FaChevronLeft className='position-absolute top-50 z ' size={40}
      onClick={left}
      />
      
        
      
      <div id={'slider'+rowId} className="slider" >
        {movies.map((item , i)=>(
          
          <Movie key={i} item={item} />
          
        ))}
        </div>


      
          <FaChevronRight className='position-absolute top-50 z zdown' size={40}
          onClick={right}
          />
          
    </div>
    
    </>
  )
}

export default Row