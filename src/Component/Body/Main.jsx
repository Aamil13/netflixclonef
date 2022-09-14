import React,{useState,useEffect} from 'react'
import axios from 'axios'
import request from '../../Request'
import './main.css'

const Main = () => {

  const [movies,setMovies] = useState([]);


  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(()=>{
      axios.get(request.requestPopular).then((response)=>{
        setMovies(response.data.results)
      })
  },[])

  // console.log(movie);

  const sstring = (str , num)=>{
      if(str?.length>num)
      {
        return str.slice(0,num) +"..."
      }else{
        return str
      }
  }


  return (
    <div className='w-100 text-white' >
      <div className='' >
          <img className='headimg'  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt={movie?.title} />
          
      </div>
      {/* <div className='headimg2' style={{backgroundImage:("url(https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/08/What-is-Computer-Vision-2048x850.jpg)")}}> */}

      <div className='abso w-100 h-100 d-flex flex-column mobb'>
        <h1 className='mx-5'>{movie?.title}</h1>
        <div>
          <button className='btn btn-light btn-lg mx-5 my-2 px-4 py-2  '>Play</button>
          <button className='btn btn-outline-light  btn-lg nohover'>Watch Later</button>
        </div>
        <p className='fw-lighter mx-5'>{movie?.release_date}</p>
        <p className='fw-light mx-5 w-25'>{sstring(movie?.overview,100)}</p>
      </div>


      </div>
    
  )
}

export default Main