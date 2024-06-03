import { createRolesController } from '@roles/UseCase/createRole'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { Router } from 'express'

const rolesRoutes = Router()

const rolesRepository = new RolesRepository() //Refatorar depois

rolesRoutes.post('/', (request, response) => {
  return createRolesController.handle(request, response)
})

rolesRoutes.get('/', (request, response) => {
  const roles = rolesRepository.findAll()

  return response.status(200).json(roles)
})

export { rolesRoutes }
