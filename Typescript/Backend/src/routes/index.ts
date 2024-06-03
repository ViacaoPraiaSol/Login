import { Router } from "express";
import usuarioRouter from "./usuarioRouter";
import tipoUserRouter from "./tipoUserRouter";

const router = Router()

router.use(usuarioRouter)
router.use(tipoUserRouter)


export default router