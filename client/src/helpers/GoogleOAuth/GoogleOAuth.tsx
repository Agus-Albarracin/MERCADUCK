import React from 'react';
import { GoogleLogin } from '@react-oauth/google';


const  googleLogin: React.FC = () => {
  /* 
    PRO: this have support in react-oauth/google
         this a new version and current component.
    REDFLAG:
           This Login dont devuelve the profile Object, devuelve the credential.
  */
    return (
        <>
          <GoogleLogin
        onSuccess={credentialResponse => {    console.log(credentialResponse);  }}
        onError={() => {    console.log('Login Failed');  }}
        useOneTap={true}
        type="standard"
        theme="filled_black"
        size="medium"
        text="continue_with"
        shape="pill"
        logo_alignment="left"
        width="200px"
        locale="es"
        use_fedcm_for_prompt={true}
        
      />
        </>
    );
};

export default  googleLogin;    
