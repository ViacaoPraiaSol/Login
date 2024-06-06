import { DataTypes, Model } from "sequelize";
import db from '.'
import sequelize from "sequelize";

class TipoUsuario extends Model {
  declare id: number
  declare nomeTipo: String
}

TipoUsuario.init({
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nomeTipo: {
    type: sequelize.STRING,
    allowNull: false,
  }
}, {
  sequelize: db,
  tableName: 'tipo_usuario',
  timestamps: false,
  underscored: true,

})


export default TipoUsuario;