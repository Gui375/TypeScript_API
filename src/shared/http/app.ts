//separando os arquivos do app do server ts, tudo que for express vem pra cá
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import { routes } from './routes'
// import cors from 'cors'
import { AppError } from '@shared/Errors/AppError'
import swaggerFile from '../../swagger.json'

const app = express()

// app.use(cors)

app.use(express.json()) //Falo pro express que ele vai usar json como retorno
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes) //Fala pro typeScript que as rotas serão executadas por esse objeto routes

app.use(
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