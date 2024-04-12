import User from "../../models/user.model";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

interface IUser {
    name: string;
    email: string;
    password: string;
}

export const signUp = async (req: Request, res: Response) => {
    const { name, email, password }: IUser = req.body;
    try {
        // Validar si el email ya existe
        const userFoud = await User.find({ email });
        if (userFoud) return res.status(400).json({ message: "El email ya existe" });

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario
        const newUser = new User({ name, email, password: hashedPassword });
        const userSaved = await newUser.save();

        // Crear un token de acceso
        // ✅ TODO: Crear el archivo jwt.ts en la carpeta libs
        //  TODO: Crear un archivo .env y agregar la variable de entorno JWT_SECRET
        
        // Decidir como se va mandar al front (cookie, header, body)

        // Enviar la respuesta
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
}