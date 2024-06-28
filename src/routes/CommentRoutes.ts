import { Router } from "express";
import CommentController from "../controllers/CommentController";

const RotearComentario = Router();

RotearComentario.get("/api/comment/get", CommentController.listComments);

RotearComentario.post("/api/comment/post", CommentController.createComment);

RotearComentario.patch("/api/comment/upadate/:id", CommentController.updateComment);

RotearComentario.delete("/api/comment/delete/:id", CommentController.deleteComment);


export default RotearComentario;