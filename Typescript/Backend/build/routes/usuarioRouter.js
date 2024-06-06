"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = __importDefault(require("../controller/usuarioController"));
const controller = new usuarioController_1.default();
const usuarioRouter = (0, express_1.Router)();
usuarioRouter.get('/usuario', controller.get.bind(controller));
usuarioRouter.post('/usuario', controller.create.bind(controller));
usuarioRouter.delete('/usuario', controller.delete.bind(controller));
exports.default = usuarioRouter;
