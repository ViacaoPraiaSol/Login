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
const usuarioService_1 = __importDefault(require("../services/usuarioService"));
class UsuarioController {
    constructor() {
        this.service = new usuarioService_1.default();
    }
    get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { status, message } = yield this.service.get();
                res.status(status).json(message);
            }
            catch (error) {
                next(error);
            }
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { status, message } = yield this.service.create(req.body);
                res.status(status).json(message);
            }
            catch (error) {
                next(error);
            }
        });
    }
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { status, message } = yield this.service.delete(req.body);
                res.status(status).json(message);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = UsuarioController;
