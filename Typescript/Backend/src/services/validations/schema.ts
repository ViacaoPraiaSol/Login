import joi from "joi"

const usuario = joi.object({
  email: joi.string().email().required(),
  senha: joi.string().min(4).required(),
  tipoUsuarioId: joi.number().required(),
})

const tipoUsuario = joi.object({
  nomeTipo: joi.string().required()
})

export = {usuario, tipoUsuario}