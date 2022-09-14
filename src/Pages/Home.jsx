import React from 'react'
import request from '../Request'
import Main from '../Component/Body/Main'
import Row from '../Component/Row/Row'



const Home = () => {
  return (
    <>
      <Main/>
      
       <Row rowId='1' title='Popular' fetchUrl={request.requestPopular}/>
       <Row rowId='2' title='Upcoming' fetchUrl={request.requestUpcoming}/>
      <Row  rowId='3' title='Trending' fetchUrl={request.requestTrending}/>
      <Row rowId='4' title='Top Rated' fetchUrl={request.requestTopRated}/> 
    </>
  )
}

export default Home