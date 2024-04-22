import React from 'react'
import { GoogleLogin, CredentialResponse } from '@react-oauth/google'
import decodeJwt from '../utils/decodeJwt'
import axios from 'axios'

const GoogleLoginComponent: React.FC = () => {
  /* 
    PRO: this have support in react-oauth/google
         this a new version and current component.
    REDFLAG:
           This Login dont devuelve the profileObj, devuelve the credential.
           Is necesary decode token Jwt.
           Inyection decode file for obtencion profile :D

    DOCUMENTATION:
    https://www.npmjs.com/package/@react-oauth/google
    https://www.youtube.com/watch?v=fvrgPAHoUgc&t=245s

    Agus Albarracin <- 
  */
  const onSuccess = async (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse)
    if (credentialResponse.credential) {
      const { payload } = decodeJwt(credentialResponse.credential)
      console.log('Se obtuvo info del usuario', payload)
    }
    try {
      const response = await axios.post('/api/signin', {
        token: credentialResponse.credential
      })
      console.log(response.data)
      // Manejar la respuesta del servidor según sea necesario
    } catch (error) {
      console.error('Error al enviar el token al servidor:', error)
    }
  }

  const funct = 'asdasd'
  console.log(funct)

  const onError = () => {
    console.log('Login Failed')
  }

  return (
    <>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
        useOneTap={true}
        type='standard'
        theme='filled_black'
        size='medium'
        text='continue_with'
        shape='pill'
        logo_alignment='left'
        width='200px'
        locale='es'
        use_fedcm_for_prompt={true}
      />
    </>
  )
}

export default GoogleLoginComponent
