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

  async get(id?: string) {
    const config = {
      include: [{ model: TipoUsuario }],
      attributes: { exclude: ['tipoUsuarioId'] }
    }
    if(id){
      const usuario = await this.model.findOne({

        where: { id },
        ...config
      })
      if (!usuario) {
        return resp(404, { error: 'Usuário não encontrado' })
      }
      return resp(200, usuario)
    }
     
    return resp(200, await this.model.findAll(config))
  }
  
  async create(usuario: iUsuario) {
    const { error } = schema.usuario.validate(usuario)
    const hashPassword = md5(usuario.senha)
    usuario.id = v4() 
    const createdUsuario = await this.model.create({ ...usuario, senha: hashPassword})

    return resp(201, createdUsuario)
  }

  
  async delete(id: string) { 
    const usuario = await this.model.findByPk(id)
    if (!usuario) {
      return resp(404, { error: 'Usuário não Encontrado'})
    }

    await usuario.destroy()

    return resp(202, {message: 'Usuário deletado com sucesso'})
  }

  async update(usuario: iUsuario) {
    const { error } = schema.usuario.validate(usuario)

    if (error) {
      return resp(400, { error: error.details[0].message })
    }

    const { id, ...updateData} = usuario
    const user = await this.model.findByPk(id)
    if (!user){
      return resp(404, { error: 'Usuário não Encontrado'})
    }

    await user.update(updateData)
    return resp(200, user)

  }
  
}

export default UsuarioService