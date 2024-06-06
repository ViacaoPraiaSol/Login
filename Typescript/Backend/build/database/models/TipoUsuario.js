"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const sequelize_2 = __importDefault(require("sequelize"));
class TipoUsuario extends sequelize_1.Model {
}
TipoUsuario.init({
    id: {
        type: sequelize_2.default.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nomeTipo: {
        type: sequelize_2.default.STRING,
        allowNull: false,
    }
}, {
    sequelize: _1.default,
    tableName: 'tipo_usuario',
    timestamps: false,
    underscored: true,
});
exports.default = TipoUsuario;
