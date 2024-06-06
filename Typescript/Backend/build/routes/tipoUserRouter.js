"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoUserController_1 = __importDefault(require("../controller/tipoUserController"));
const controller = new tipoUserController_1.default();
const tipoUserRouter = (0, express_1.Router)();
tipoUserRouter.get('/tipoUser', controller.get.bind(controller));
exports.default = tipoUserRouter;
