import { Request, Response } from "express";

export const profile = async (req: Request, res: Response) => {
    res.send("Profile route");
}