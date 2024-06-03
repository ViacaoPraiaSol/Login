import { ModelStatic } from "sequelize";
import TipoUsuario from "../database/models/TipoUsuario";
import Usuario from "../database/models/Usuario";
import resp from "../utils/resp";
import iUsuario from "../interfaces/iUsuario";
import md5 from "md5";
import { v4 } from "uuid";
import schema from "./validations/schema";

class UsuarioService {
  private model: ModelStatic<Usuario> = Usuario;

  async get() {
    const usuarios = await this.model.findAll({
      //include: { model: TipoUsuario, as: 'permit' }
    })
    return resp(200, usuarios)
  }
  
  async create(usuario: iUsuario) {
    const { error } = schema.usuario.validate(usuario)
    
    const hashPassword = md5(usuario.senha)
    usuario.id = v4() 
    const createdUsuario = await this.model.create({ ...usuario, senha: hashPassword})

      return resp(201, createdUsuario)
  }

  
  async delete(id: string) { 

    const usuario = await Usuario.findOne({ where: {id}})
    await usuario!.destroy()

      return resp(201, usuario)
  }
  
}

export default UsuarioService