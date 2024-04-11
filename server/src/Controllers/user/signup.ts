import { Request, Response } from "express";

export const signUp = async (req: Request, res: Response) => {
    res.send("Signup route");
}