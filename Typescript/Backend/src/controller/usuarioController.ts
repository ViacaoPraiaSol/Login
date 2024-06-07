import { NextFunction, Request, Response } from "express";
import UsuarioService from "../services/usuarioService";

class UsuarioController {
  private service = new UsuarioService()

  /*
  async buscar(req: Request, res: Response, next: NextFunction){
    try {

      const { status, message} = await this.service.get()
    } catch (error) {
      next(error)
    }
  }
  */

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body
      const { status, message} = await this.service.get(id)
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