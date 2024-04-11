import { Request, Response } from "express";

export const signOut = async (req: Request, res: Response) => {
    res.send("Signout route");
}