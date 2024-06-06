import { ModelStatic } from "sequelize";
import TipoUsuario from "../database/models/TipoUsuario";
import resp from "../utils/resp";
import iTipoUsuario from "../interfaces/iTipoUsuario";
import schema from "./validations/schema";

class TipoUserService {
  private model: ModelStatic<TipoUsuario> = TipoUsuario

  async get(number?: number) {
    if (number) {
      const tipos = await this.model.findAll({
        where: { id: number },
        attributes: ['iTipoUsuario.id'],
        raw: true,
        subQuery: false
      })
      return resp(200, tipos)
    }
    return resp(200, await this.model.findAll())
  }
  
  async create(tipoUsuario: iTipoUsuario) {
    const { error } = schema.tipoUsuario.validate(tipoUsuario)

    const createTipoUsuario = await this.model.create({ ...tipoUsuario })
    
    return resp(201, createTipoUsuario)
  }

}


export default TipoUserService