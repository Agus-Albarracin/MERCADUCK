import { Request, Response } from 'express';

export const getAllProducts = async (req: Request, res: Response) => {
    res.send("Here are all the products")
}

export const getProductById = async (req: Request, res: Response) => {
    res.send("Here is the product with id: " + req.params.id)
}

export const createProduct = async (req: Request, res: Response) => {
    res.send("Product created")
}

export const updateProduct = async (req: Request, res: Response) => {
    res.send("Product updated")
}

export const deleteProduct = async (req: Request, res: Response) => {
    res.send("Product deleted")
}
