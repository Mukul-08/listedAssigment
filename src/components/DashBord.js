import React, { Component } from 'react'
import vector1 from "../assest/Vector1.png";
import vector2 from "../assest/Vector2.png";
import vector3 from "../assest/Vector3.png";
import vector4 from "../assest/Vector4.png";
import vector from "../assest/Vector.png";
import profile from "../assest/image 1.png";

export class DashBord extends Component {
  render() {
    return (
      <div>
         <form class="e">
          <input type="text" placeholder="Search.." name="search" className='search'/>
          <button type="submit" className='but'><i class="fa fa-search"></i></button>
         </form>
      

        <img src={vector} className="bell" alt="logo" />
        <img src={profile} className="profile" alt="logo" />
         <h1 className='Dash'>Dashboard</h1>
    <div className='TotalR'>
      <img src={vector1} className="App-logo" alt="logo" />
      <h1 className='d1'>Total Revenues</h1>
      <h1 className='n1'>$2,129,430</h1>
    </div>
    <div className='Box2'>
      <img src={vector2} className="App-logo" alt="logo" />
      <h1 className='d1'>Total Revenues</h1>
      <h1 className='n1'>1,520</h1>
    </div>
    <div className='Box3'>
        <img src={vector3} className="App-logo" alt="logo" />
      <h1 className='d1'>Total Likes</h1>
      <h1 className='n1'>9,721</h1>
    </div>
    <div className='Box4'>
        <img src={vector4} className="App-logo4" alt="logo" />
      <h1 className='d1'>Total Users</h1>
      <h1 className='n1'>892</h1>
    </div>
      </div>
    )
  }
}

export default DashBord