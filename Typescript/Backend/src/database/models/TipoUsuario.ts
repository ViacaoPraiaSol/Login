import { DataTypes, Model } from "sequelize";
import db from '.'
import sequelize from "sequelize";

class TipoUsuario extends Model {
  declare id: String
  declare nome_tipo: String
}

TipoUsuario.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    
    allowNull: false,
  },
  nome_tipo: {
    type: sequelize.STRING,
    allowNull: false,
  }
}, {
  sequelize: db
})