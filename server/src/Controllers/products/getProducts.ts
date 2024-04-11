import productModel from "../../models/product.model";
import { Request, Response } from "express";

// Crear interfaces para definir el tipo de los objetos que se van a utilizar

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productModel.find();
        res.status(200).json(products);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await productModel.findById(id);
        res.status(200).json(product);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}