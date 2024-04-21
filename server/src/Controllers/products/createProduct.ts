import productModel from '../../models/product.model'
import { Request, Response } from 'express'

interface Product {
  name: string
  miniDescription: string
  price: number
  category: string
  description: string
  image: string
}

export const createProduct = async (req: Request, res: Response) => {
  const {
    name,
    miniDescription,
    price,
    category,
    description,
    image
  }: Product = req.body

  try {
    const newProduct = new productModel({
      name,
      miniDescription,
      price,
      category,
      description,
      image
    })

    await newProduct.save()
    res.status(201).json(newProduct)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}
