import React from 'react'
// import {useLocation} from 'react-router-dom';
import Nav from './Nav';
import DashBord from './DashBord';
import Graph from './Graph';
import Piichart from './Piichart';
import Schedule from './Schedule'

function Home(){


  return(
   <div>
    <Nav/>
    <DashBord/>
    <Graph/>
    <Piichart/>
    <Schedule/>
  
   </div>
   
  )
}

export default Home