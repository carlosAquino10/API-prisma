import { Router } from "express";
import UserController from "../controllers/UserController";

const RotearUsuario = Router();

RotearUsuario.get("/api/user/get", UserController.listUsers);

RotearUsuario.post("/api/user/post", UserController.createUser);

RotearUsuario.patch("/api/user/update/:id", UserController.updateUser);

RotearUsuario.delete("/api/user/delete/:id", UserController.deleteUser);

export default RotearUsuario;