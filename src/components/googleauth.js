import React from 'react'
import { useNavigate } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login'
const clientId = "9986215960-1bku7qo4v0268rje17bcnkb4h55i4rlc.apps.googleusercontent.com"

// {"web":{"client_id":"9986215960-1bku7qo4v0268rje17bcnkb4h55i4rlc.apps.googleusercontent.com","project_id":"carbon-airfoil-331313","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","redirect_uris":["http://localhost:3000"],"javascript_origins":["http://localhost:3000"]}}


export default function  Googleauth(){
    
 
  const navigation = useNavigate();
    const onSuccess = function (res) {
      if(res){
          console.log("LOGIN SUCCESS! current user: ",res.profileObj);
          navigation('/listedAssigment/home')
        }
    }
    const onFailure = (res) => {
        console.log("LOGIN Fail : ",res);
    }
    
    return (
      <div id = "signInButton">
      <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
      className="b1"
      ></GoogleLogin>
      </div>
    ) 
  }




