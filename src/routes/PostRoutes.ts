import { Router } from "express";
import PostController from "../controllers/PostController";

const RotearPost = Router();

RotearPost.get("/api/post/get", PostController.listPosts);

RotearPost.post("/api/post/post", PostController.createPost);

RotearPost.patch("/api/post/upadate/:id", PostController.updatePost);

RotearPost.delete("/api/post/delete/:id", PostController.deletePost);

export default RotearPost;