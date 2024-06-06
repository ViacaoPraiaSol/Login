"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioRouter_1 = __importDefault(require("./usuarioRouter"));
const tipoUserRouter_1 = __importDefault(require("./tipoUserRouter"));
const router = (0, express_1.Router)();
router.use(usuarioRouter_1.default);
router.use(tipoUserRouter_1.default);
exports.default = router;
