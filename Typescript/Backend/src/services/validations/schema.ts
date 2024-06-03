import joi from "joi"

const usuario = joi.object({
  email: joi.string().email().required(),
  senha: joi.string().min(4).required(),
})

export = {usuario}