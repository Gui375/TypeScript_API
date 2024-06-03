import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { routes } from './routes'
// import cors from 'cors'
import { AppError } from '@shared/Errors/AppError'

const app = express()

// app.use(cors)

app.use(express.json()) //Falo pro express que ele vai usar json como retorno

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

app.listen(process.env.PORT, () => {
  //process.env.PORT Vaiavel de ambiente criada para não versionar a mesma
  console.log({ message: `Server started on port ${process.env.PORT}!` })
})
