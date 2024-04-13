import { Request, Response } from "express";
import userModel from "../../models/user.model";

export const getProfile = async (req: Request, res: Response) => {
    const users = await userModel.find();
try{
    if(users) return res.status(200).json(users)
    
}catch(error){
    return res.status(500).json("Hubo un error al recueperar los usarios")
} 
  
}

export const getProfileById = async (req: Request, res: Response) =>{
    const { id } = req.query;
    try{
        const user = await userModel.findById(id);
        if(user) return res.status(200).json(user)
            
    }catch(error){
        return res.status(500).json(`Hubo error al recuperar el usuario ${id}`)
    }
}