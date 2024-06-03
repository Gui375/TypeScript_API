import { RolesRepository } from '@roles/repositories/RolesRepository'
import { Router } from 'express'

const rolesRoutes = Router()

const rolesRepository = new RolesRepository()

rolesRoutes.post('/', (request, response) => {
  const { name } = request.body

  const roleAreadyExists = rolesRepository.findByName(name)

  if (roleAreadyExists) {
    return response.status(400).json({ error: 'Role already exists' })
  }

  const role = rolesRepository.create({ name })

  return response.status(201).json(role)
})

rolesRoutes.get('/', (request, response) => {
  const roles = rolesRepository.findAll()

  return response.status(200).json(roles)

})

export { rolesRoutes }
