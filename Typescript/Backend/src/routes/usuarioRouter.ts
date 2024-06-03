import { Router } from "express";
import UsuarioController from "../controller/usuarioController";

const controller = new UsuarioController()
const usuarioRouter = Router()

usuarioRouter.get('/usuario', controller.get.bind(controller))

usuarioRouter.post('/usuario', controller.create.bind(controller))

usuarioRouter.delete('/usuario', controller.delete.bind(controller))

export default usuarioRouter