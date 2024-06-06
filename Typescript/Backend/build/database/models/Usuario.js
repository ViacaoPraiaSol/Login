"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const sequelize_2 = __importDefault(require("sequelize"));
const TipoUsuario_1 = __importDefault(require("./TipoUsuario"));
class Usuario extends sequelize_1.Model {
}
Usuario.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        //autoIncrement: true,
        allowNull: false,
    },
    nomeUsuario: {
        type: sequelize_2.default.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_2.default.STRING,
        unique: true,
        allowNull: false,
    },
    senha: {
        type: sequelize_2.default.STRING,
        allowNull: false,
    },
    tipoUsuarioId: {
        type: sequelize_2.default.INTEGER,
        references: {
            model: 'tipo_usuario',
            key: 'id'
        }
    }
}, {
    sequelize: _1.default,
    tableName: 'usuario',
    timestamps: false,
    underscored: true,
});
Usuario.belongsTo(TipoUsuario_1.default, {
    foreignKey: 'tipoUsuarioId'
});
TipoUsuario_1.default.hasMany(Usuario, {
    foreignKey: 'tipoUsuarioId'
});
exports.default = Usuario;
