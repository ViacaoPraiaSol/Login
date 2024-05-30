import { DataTypes, Model } from "sequelize";
import db from '.'
import sequelize from "sequelize";

class Usuario extends Model {
  declare id: string
  declare nome_usuario: string
  declare email: string
  declare senha: string

}

Usuario.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  nome_usuario: {
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
  tipo_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'tipo_usuario',
      key: 'id'
    }
  }
}, {
  sequelize: db
})