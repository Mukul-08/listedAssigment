import React, { Component } from 'react'
import "./Signup.css"


export class Schedule extends Component {
  render() {
    return (
      <div className='sche'>
        <div className='line1'></div>
        <div className='line2'></div>
        <h1 className='tp'>Today's Schedule</h1>
        <h1 className='tp1'>See All <i class="fa fa-angle-right"></i></h1>
        <h1 className='m1'>Meeting with kuta Bali</h1>
        <h2 className='m1time'>14:00-15:00</h2>
        <h2 className='m1ad'>at Sunset Road, kuta, Bali</h2>
        <h1 className='m2'>Check operation at Giga Factory 1</h1>
        <h2 className='m2time'>18:00-20:00</h2>
        <h2 className='m2ad'>at Central Jakarta</h2>
      </div>
    )
  }
}

export default Schedule