import React, { Component } from 'react'
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';
import pdata from "./data";
export class Graph extends Component {
  render() {
    return (
      <div>
       <div className='datachart'>
      <h1 className='act'>Activities</h1>
      <h2 className='date'>May-June 2022 <i class="fa fa-angle-down"></i></h2>
      <ResponsiveContainer className="chartt">
            <LineChart  data={pdata}  margin={{top:210,right:300,left:20,}}>
             <CartesianGrid vertical={false}/>
              <XAxis dataKey="name" interval={'preserveStartEnd'} />
              <YAxis/>
              <Legend  verticalAlign="top" align="right" height={36} iconType='circle' iconSize={20} itemPadding={15}  wrapperStyle={{top:100}}/>
              <Line dataKey="student" type="monotone" stroke="#E9A0A0" dot={false} strokeWidth={5}/>
              <Line dataKey="fees"  type="monotone" stroke="#9BDD7C" dot={false} strokeWidth={5}/>
            </LineChart>
      </ResponsiveContainer>
    </div> 
      </div>
    )
  }
}

export default Graph