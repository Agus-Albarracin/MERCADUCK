import express from "express";
import {Request, Response, NextFunction } from "express";

// Rutas generales
import productRoutes from "./routes/product.routes"
import userRoutes from "./routes/user.routes"

const server = express();

server.use(express.json()); // para decirle que todo aquello que recibimos sea un json.
server.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Reemplaza con la URL del deploy
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Es para aclarar que las solicitud HTTP puede contener información de Autenticación
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

// Uso de rutas
server.use("/api", productRoutes)
server.use("/api", userRoutes)

export default server;