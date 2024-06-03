import { createRolesController } from '@roles/UseCase/createRole'
import { listRolesController } from '@roles/UseCase/listRole'
import { Router } from 'express'

const rolesRoutes = Router()

rolesRoutes.post('/', (request, response) => {
  return createRolesController.handle(request, response)
})

rolesRoutes.get('/', (request, response) => {
  return listRolesController.handle(request, response)
})

export { rolesRoutes }
