import { DataTypes, Model } from "sequelize";
import db from '.'
import sequelize from "sequelize";
import TipoUsuario from "./TipoUsuario";

class Usuario extends Model {
  declare id: string
  declare nomeUsuario: string
  declare email: string
  declare senha: string
  declare tipoId: number

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
  tipoId: {
    type: sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'tipo',
      key: 'id'
    }
  }
}, {
  sequelize: db,
  tableName: 'usuario',
  timestamps: false,
  underscored: true,
})

TipoUsuario.hasMany(Usuario, {
  foreignKey: 'tipoId',
  //as: 'permit'
});


export default Usuario;