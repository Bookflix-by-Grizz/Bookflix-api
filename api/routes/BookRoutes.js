import { Router } from "express";
import { createBook } from "../controllers/BookController";

const boookRouter = Router();

boookRouter.post('/', createBook);

export default boookRouter;