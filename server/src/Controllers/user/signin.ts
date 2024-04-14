import { Request, Response } from "express";
import { OAuth2Client } from 'google-auth-library';
import userModel from "../../models/user.model"
import dotenv from "dotenv"
dotenv.config(); 
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID

const client = new OAuth2Client(CLIENT_ID);
/** OAuth2Client connect with services of authentication through the CLIENT_ID
 * this instance using services for example verifying access tokens
 * 
 * OAuth2Client conecta con los servicios de autenticacion a través del CLIENT_ID de la API
 * esta instancia permite que podamos usar los servicios ejemplo verificar el acceso. 
*/

export async function signIn(req: Request, res: Response) {
  const { token } = req.body;
  
  try {
      const ticket = await client.verifyIdToken({
        //verifyIdToken is exclusiv method by client
          idToken: token,
          audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        /** getPayload is using for get info such given name, email, lastname, etc
         * first verifyed token before then using getPayload().
        */
        
        if (!payload) { throw new Error('Token payload is undefined'); }
        /** TypeScript requires the payload to be verified and non-null
         Without this function, the props destructured from the token capture errors.

         TypeScript requiere verificar que payload no sea nulo.
         Sin esta función las props que destructura de token capturan errores

        */

        // Save or update user in the data base

        const { sub, given_name, email } = payload;
        let user = await userModel.findOne({ googleId: sub });

        if (!user) {
            user = new userModel({
              googleId: sub,
              email: email,
              name: given_name,
            });
          }

          await user.save();
          res.status(200).json({ message: 'Sign-in successful', user });

  }catch(error){ 
    console.error('Error signing in:', error);
    return res.status(500).json({ error: 'Internal server error' });
    }


}