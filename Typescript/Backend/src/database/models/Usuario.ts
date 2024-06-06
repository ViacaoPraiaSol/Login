import { DataTypes, Model } from "sequelize";
import db from '.'
import sequelize from "sequelize";
import TipoUsuario from "./TipoUsuario";

class Usuario extends Model {
  declare id: string
  declare nomeUsuario: string
  declare email: string
  declare senha: string
  declare tipoUsuarioId: number

}

Usuario.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    //autoIncrement: true,
    allowNull: false,
  },
  nomeUsuario: {
    type: sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  senha: {
    type: sequelize.STRING,
    allowNull: false,
  },
  tipoUsuarioId: {
    type: sequelize.INTEGER,
    references: {
      model: 'tipo_usuario',
      key: 'id'
    }
  }
}, {
  sequelize: db,
  tableName: 'usuario',
  timestamps: false,
  underscored: true,
})

Usuario.belongsTo(TipoUsuario, {
  foreignKey: 'tipoUsuarioId'
})

TipoUsuario.hasMany(Usuario, {
  foreignKey: 'tipoUsuarioId'
})

export default Usuario;