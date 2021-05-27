const bodyParser =  require('body-parser')
const express = require('express')
const port = process.env.PORT || 4000
const app = express()
app.use(bodyParser.json())

app.use('/api', require('./src/controllers/AlunosController').router)
app.use('/api', require('./src/controllers/CursosController').router)

app.listen(port, () => {
    console.log('Escutando na porta: ' + port)
})