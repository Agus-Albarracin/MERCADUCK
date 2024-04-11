import { Request, Response } from "express";

export const updateProduct = async (req: Request, res: Response) => {
    res.send("Product updated")
}
