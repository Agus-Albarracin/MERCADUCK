import productModel from "../../models/product.model";
import { Request, Response } from "express";

// Crear interfaces para definir el tipo de los objetos que se van a utilizar

export const getAllProducts = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1; // Página actual, por defecto 1
    const limit = parseInt(req.query.limit as string) || 4  

    try {
        const totalProducts = await productModel.countDocuments();
        const totalPages = Math.ceil(totalProducts / limit);

        const products = await productModel
            .find()
            .skip((page - 1) * limit) // Saltar productos según la página actual
            .limit(limit); // Limitar la cantidad de productos por página

        res.status(200).json({
            products,
            currentPage: page,
            totalPages,
            totalProducts
        });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await productModel.findById(id);
        res.status(200).json(product);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}