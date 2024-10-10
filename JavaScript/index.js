import express from 'express'
import banco from './config/database.js'

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', async(req, res) => {
  //let usuarios = await banco.raw("SELECT id, nome FROM USUARIO")
  //await banco('website.usuario').insert({ email: 'carlos@' });

  let usuarios = await banco.select("id", "email").from("website.usuario")
  return res.status(200).json(usuarios)
})
app.listen(8801, () => {
  console.log('aplicação iniciada em http://localhost:8801')
})

