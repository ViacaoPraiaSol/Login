import { ModelStatic } from "sequelize";
import TipoUsuario from "../database/models/TipoUsuario";
import resp from "../utils/resp";
import iTipoUsuario from "../interfaces/iTipoUsuario";
import schema from "./validations/schema";

class TipoUserService {
  private model: ModelStatic<TipoUsuario> = TipoUsuario

  async get(id?: number) {
    if (id) {
      const tipo = await this.model.findByPk(id)
      if (!tipo) {
        return resp (404, { error: 'Tipo de usuário não encontrado' })
      }
      return resp(200, tipo)
    }
    return resp(202, await this.model.findAll())
  }
  
  async create(tipoUsuario: iTipoUsuario) {
    const { error } = schema.tipoUsuario.validate(tipoUsuario)

    const createTipoUsuario = await this.model.create({ ...tipoUsuario })
    
    return resp(201, createTipoUsuario)
  }

  async delete(id: number) {
    const tipo = await this.model.findByPk(id)

    if (!tipo) {
      return resp(404, { error: 'Tipo de usuário não encontrado' });
    }
    await tipo.destroy()
    return resp(202, { message: 'Tipo de usuário deletado com sucesso'})
  }

}


export default TipoUserService