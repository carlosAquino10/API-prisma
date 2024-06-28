import { Request, Response } from "express";
import UserDataBaseService from "../services/UserDataBaseService";

class UsuarioControle {
  constructor() {}

  async listUsers(req: Request, res: Response) {
    try {
      const users = await UserDataBaseService.listDBUsers();
      res.json({
        status: "ok",
        users: users,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "error",
        message: error,
      });
    }
  }

  async createUser(req: Request, res: Response) {
    const body = req.body;
    console.log(body);

    if (!body.email || !body.name) {
      res.json({
        status: "error",
        message: "Faltam parâmetros",
      });
    }

    try {
      const novousuario = await UserDataBaseService.insertDBUser({
        name: body.name,
        email: body.email,
      });
      res.json({
        status: "ok",
        newuser: novousuario,
      });
    } catch (error) {
      res.json({
        status: "error",
        message: error,
      });
    }
  }

  async updateUser(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      res.json({
        status: "error",
        message: "Falta ID",
      });
    }

    const { name, email } = req.body;
    if (!email || !name) {
      res.json({
        status: "error",
        message: "Faltam parâmetros",
      });
    }

    try {
      const atualizarUsuario = await UserDataBaseService.updateDBUser(
        {
          name: name,
          email: email,
        },
        parseInt(id)
      );
      res.json({
        status: "ok",
        newuser: atualizarUsuario,
      });
    } catch (error) {
      res.json({
        status: "error",
        message: error,
      });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      res.json({
        status: "error",
        message: "Falta ID",
      });
    }

    try {
      const response = await UserDataBaseService.deleteDBUser(parseInt(id));
      if (response) {
        res.json({
          status: "ok",
          message: "Usuário deletado!",
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        status: "error",
        message: error,
      });
    }
  }
}

export default new UsuarioControle();