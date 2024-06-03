import { NextFunction, Request, Response } from "express";
import TipoUserService from "../services/tipoUserService";

class TipoUserController {
  private service = new TipoUserService()

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.get()
      res.status(status).json(message)
    } catch (error) {
      next(error)
    }
  }
}

export default TipoUserController