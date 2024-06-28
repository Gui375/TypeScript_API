//separando os arquivos do app do server ts, tudo que for express vem pra cá
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import { routes } from './routes'
import cors from 'cors'
import { errors } from 'celebrate'
import { AppError } from '@shared/Errors/AppError'
import swaggerFile from '../../swagger.json'

const app = express()

app.use(
  cors({
    origin: 'http://localhost:8081', // Permite apenas requisições do localhost:3000, ajuste conforme necessário
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type,Authorization', // Cabeçalhos permitidos
  }),
)

app.use(express.json()) //Falo pro express que ele vai usar json como retorno
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes) //Fala pro typeScript que as rotas serão executadas por esse objeto routes
//O celebrate tem que ser passado obrigatoriamente após as rotas a posição é de extrema importancia
app.use(errors()) //Detecta erros de validação e interrompe a execução das rotas

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      })
    }
    console.log(error)
    return response.status(500).json({
      status: 'Error',
      message: 'Internal server error',
    })
  },
)

export { app }
