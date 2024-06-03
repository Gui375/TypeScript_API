import { Router } from 'express'
import { Role } from './entities/Role'

const rolesRoutes = Router()
//Role é uma classe criada
const roles: Role[] = []

rolesRoutes.post('/', (request, response) => {
  const { name } = request.body
  const role = new Role()

  Object.assign(role, {
    name,
    created_at: new Date(),
  })
  //Criando o objeto que será adicionado dentro do array roles

  roles.push(role)
  return response.status(201).json(role)
})

export { rolesRoutes }
