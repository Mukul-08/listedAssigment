import React, { Component } from 'react'
import {PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

import "./Signup.css"
const COLORS = ['#98D89E', '#F6DC7D', '#EE8484'];
const piedata = [
  {
    name:"Super Hoodies",
    value:55
  },
  {
    name:"Custom short pants",
    value:31
  },
  {
    name:"Super Hoodies",
    value:14
  },
  
]

export class Pichart extends Component {
  render() {
    return (
      <div className='pii'>
        <h1 className='tp'>Top Product</h1>
        <h1 className='tp1'>May-June 2021 <i class="fa fa-angle-down"></i></h1>
      <ResponsiveContainer width="100%" height="100%" className="pich">
        <PieChart>
        <Legend verticalAlign='center' align='right' height={180} iconType='circle' iconSize={15}  layout='horizantal'  className='lepi' wrapperStyle={{top:100}} />
      
        
         
          <Pie
            data={piedata}
            cx="30%"
            cy="60%"
            labelLine={false}
            fill="#8884d8"
            dataKey="value"
          >
            {piedata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>
    )
  }
}

export default Pichart