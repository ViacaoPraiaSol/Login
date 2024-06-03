import { NextFunction, Request, Response } from "express";
import UsuarioService from "../services/usuarioService";

class UsuarioController {
  private service = new UsuarioService()

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message} = await this.service.get()
      res.status(status).json(message)
    } catch (error) {
      next(error)
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.create(req.body)
      res.status(status).json(message)
    } catch (error) {
      next(error)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.delete(req.body)
      res.status(status).json(message)
    } catch (error) {
      next(error)
    }
  }


}

export default UsuarioController