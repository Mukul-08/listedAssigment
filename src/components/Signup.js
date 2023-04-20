import React, {useEffect } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import Google from './googleauth'
import { gapi } from "gapi-script";
import './Signup.css'

function Login() {
  const navigation = useNavigate();
  function sumbit(){
    navigation('/')
  }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);
 
    return (

    
      <div className='login'>
              
              <table>
          <td className='col1'>
            
            <h1 className="logo">Board.</h1>
       
          </td>
          <td className='col2'>
         
          <h1 className="heading">Sign Up</h1>
          <h2 className="subheading">Create new Account</h2>
          <Google/>
          <button className='apple'>
           <i className="fa fa-apple"></i> &nbsp; Sign in with Apple
          </button>
         
          <div className='con1'>
        <form action="POST">
          <label className='lable1'>Email address</label>
          <input type="email" placeholder='abc@gmail.com' className="input1"></input>
          <label className='lable2'>Password</label>
          <input type='password'  placeholder='Enter Password' className="input2"></input>
          <br></br>
          <a href='/' className='lable3'>Forget Password</a>
          <button type="sumbit" onClick={sumbit}  className='button1'>Sumbit</button>
        </form>
        <h1 className="l1">Already have an Account ? <Link to="/">Login Page</Link></h1>
        </div>
          </td>
        </table>
      </div>

    )
}

export default Login;