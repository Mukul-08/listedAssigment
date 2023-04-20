import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
      <div>
      <div className='nav'>
      <h6 className='homelogo'>Board.</h6>
      <h6 className='navl1'> <i class="fa fa-pie-chart" ></i>&ensp; Dashboard</h6>
      <h6 className='navl2'> <i class='fas fa-tags'></i> &ensp; Transaction</h6>
      <h6 className='navl3'> <i class="fa fa-calendar"></i> &ensp; Sechudel</h6>
      <h6 className='navl4'> <i class='far fa-user-circle'></i> &ensp; User</h6>
      <h6 className='navl5'> <i class="fa fa-gear"></i> &ensp; Settings</h6>
      <h6 className='navl6'>Help</h6>
      <h6 className='navl7'>Contact Us</h6>
    </div>
      </div>
    )
  }
}

export default Nav