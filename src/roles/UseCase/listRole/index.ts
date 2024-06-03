import { RolesRepository } from '@roles/repositories/RolesRepository'
import { ListRolesUseCase } from './listRolesUseCase'
import { ListRolesController } from './listRolesController'

const rolesRepository = new RolesRepository()
const listRolesUseCase = new ListRolesUseCase(rolesRepository)
export const listRolesController = new ListRolesController(listRolesUseCase)
