import React from 'react';
import { GoogleLogin } from '@react-oauth/google';


const  googleLogin: React.FC = () => {
    return (
        <div><GoogleLogin
        onSuccess={credentialResponse => {    console.log(credentialResponse);  }}
        onError={() => {    console.log('Login Failed');  }}
        useOneTap
      />;
        </div>
    );
};

export default  googleLogin;    