import { ModelStatic } from "sequelize";
import TipoUsuario from "../database/models/TipoUsuario";
import resp from "../utils/resp";

class TipoUserService {
  private model: ModelStatic<TipoUsuario> = TipoUsuario

  async get() {
    const tipos = await this.model.findAll()
    return resp(200, tipos)
  }
}


export default TipoUserService