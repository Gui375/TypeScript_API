import 'dotenv/config'
import express from 'express'
import 'express-async-errors'

const app = express()

app.use(express.json()) //Falo pro express que ele vai usar json como retorno

const projects: any[] = [] //Array em typeScript

app.get('/', (request, response) => {
  return response.json({ message: 'Olá mundo!' })
})

app.post('', (request, response) => {
  const { id, name, owner } = request.body
  const project = {
    id,
    name,
    owner,
  }
  if (!name || !owner) {
    return response.status(400).json({ error: 'Name and owner are required' })
  }

  projects.push(project)
})
app.listen(process.env.PORT, () => {
  //process.env.PORT Vaiavel de ambiente criada para não versionar a mesma
  console.log(`Server started on port 3000! ${process.env.PORT}`)
})
