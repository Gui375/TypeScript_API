import { RolesRepository } from '@roles/repositories/RolesRepository'
import { ListRolesUseCase } from './listRolesUseCase'
import { ListRolesController } from './listRolesController'

const rolesRepository = RolesRepository.getInstance() //Estamos apenas chamando uma instancia que já existe
const listRolesUseCase = new ListRolesUseCase(rolesRepository)
export const listRolesController = new ListRolesController(listRolesUseCase)
