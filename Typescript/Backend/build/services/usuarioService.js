"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TipoUsuario_1 = __importDefault(require("../database/models/TipoUsuario"));
const Usuario_1 = __importDefault(require("../database/models/Usuario"));
const resp_1 = __importDefault(require("../utils/resp"));
const md5_1 = __importDefault(require("md5"));
const uuid_1 = require("uuid");
const schema_1 = __importDefault(require("./validations/schema"));
class UsuarioService {
    constructor() {
        this.model = Usuario_1.default;
    }
    get(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = { include: [{ model: TipoUsuario_1.default }] };
            if (user) {
                const usuarios = yield this.model.findAll(Object.assign({ where: { id: user } }, config));
                return (0, resp_1.default)(200, usuarios);
            }
            return (0, resp_1.default)(200, yield this.model.findAll(config));
        });
    }
    create(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = schema_1.default.usuario.validate(usuario);
            const hashPassword = (0, md5_1.default)(usuario.senha);
            usuario.id = (0, uuid_1.v4)();
            const createdUsuario = yield this.model.create(Object.assign(Object.assign({}, usuario), { senha: hashPassword }));
            return (0, resp_1.default)(201, createdUsuario);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield Usuario_1.default.findOne({ where: { id } });
            yield usuario.destroy();
            return (0, resp_1.default)(201, usuario);
        });
    }
}
exports.default = UsuarioService;
