import app from "./app";
import 'dotenv/config'

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`))