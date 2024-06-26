import { NextFunction, Request, Response } from "express";
import TipoUserService from "../services/tipoUserService";

class TipoUserController {
  private service = new TipoUserService()

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body
      const { status, message } = await this.service.get(+id)
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

  // Método delete passando os dados no body
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body
      const { status, message } = await this.service.delete(+id)
      res.status(status).json(message)
    } catch (error) {
      next(error)
    }
  }

  
}

export default TipoUserController