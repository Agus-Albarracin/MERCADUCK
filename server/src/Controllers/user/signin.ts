import { Request, Response } from "express";

export const signIn = async (req: Request, res: Response) => {
    res.send("Signin route");
}