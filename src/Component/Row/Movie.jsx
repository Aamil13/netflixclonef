import React , {useState} from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import './Row.css'
import { UserAuth } from '../../context/AuthContext'
import { db } from '../../firebase'
import { arrayUnion,doc , updateDoc } from 'firebase/firestore'


const Movie = ({item}) => {

    const {user} = UserAuth();
    const [like ,setLike] = useState(false);
    const [saved , setSaved] = useState(false);

    const movieID = doc(db,"users",`${user?.email}`)

    const saveShow = async() => {
      if(user?.email){
        setLike(!like)
        setSaved(true)
        await updateDoc(movieID , {
          savedshows:arrayUnion({
            id: item.id,
            title: item.title,
            img : item.backdrop_path
          })
        })
      } else{
        alert("Please Log In");
      }
    }



  return (
    <div className='d-inline-block p-2' style={{width:"160px", position:'relative',cursor:'pointer'}}>
            <img className='img-fluid d-block w-100 ' src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} alt={item?.title}/>
          <div className='absolu'>
            <p className=' text-center pt-5'>{item.title}</p>
            <p onClick={saveShow} className='position-absolute top-0 ms-2 fs-3'>
              {like ? <AiFillHeart/> : <AiOutlineHeart/>}
            </p>
          </div>
          </div>
  )
}

export default Movie