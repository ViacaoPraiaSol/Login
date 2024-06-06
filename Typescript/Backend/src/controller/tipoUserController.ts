import { NextFunction, Request, Response } from "express";
import TipoUserService from "../services/tipoUserService";

class TipoUserController {
  private service = new TipoUserService()

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.get(req.body)
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
}

export default TipoUserController