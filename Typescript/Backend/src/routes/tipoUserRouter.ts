import { Router } from "express";
import TipoUserController from "../controller/tipoUserController";

const controller = new TipoUserController()
const tipoUserRouter = Router()

tipoUserRouter.get('/tipoUser', controller.get.bind(controller))

tipoUserRouter.post('/tipoUser', controller.create.bind(controller))


export default tipoUserRouter