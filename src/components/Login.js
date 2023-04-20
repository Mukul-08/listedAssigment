import React from 'react'
import {useNavigate,Link} from 'react-router-dom'


function Login() {
  const navigation = useNavigate();
  function submit(){
    navigation('/listedAssigment/home')
  }
    return (

      <div className="login">
      
          <table>
          <td className="col1">
            <h1 className="logo">Board.</h1>
          </td>
          <td className="col2">
          <h1 className="heading">Login</h1>
          <h2 className="subheading">Create new Account</h2>
          <div className="con11">
        <form action="POST">
          <input tupe="email"placeholder='abc@gmail.com' className="input1"></input>
          <input tupe="password" placeholder='Enter Password' className="input2"></input>
          <button type="sumbit" onClick={submit} className='button1'>Sumbit</button>
        </form>
        </div>
        <h1 className='l2'>Don't have Account ? <Link to="/listedAssigment/Signup">Register here</Link></h1>
      
          </td>
        </table>
        
        
      </div>

    )
}

export default Login;