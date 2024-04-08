const express = require("express");
import {Request, Response, NextFunction } from "express";
const server = express();


server.use(express.json()); // para decirle que todo aquello que recibimos sea un json.
server.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Reemplaza con la URL del deploy
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Es para aclarar que las solicitud HTTP puede contener información de Autenticación
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

module.exports = server;