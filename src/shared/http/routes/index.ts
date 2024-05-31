import { AppError } from '@shared/Errors/AppError'
import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  throw new AppError('Acesso negado')
  response.json({ message: 'Olá mundo !' })
})

export { routes }
