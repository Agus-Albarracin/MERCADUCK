import { Request, Response } from "express";

export const deleteProduct = async (req: Request, res: Response) => {
    res.send("Product deleted")
}
