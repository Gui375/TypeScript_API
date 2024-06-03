import { RolesRepository } from '@roles/repositories/RolesRepository'
import { CreateRoleUseCase } from './CreateRoleUseCase'
import { CreateRoleController } from './CreateRoleController'

const rolesRepository = new RolesRepository()

const createRoleUseCase = new CreateRoleUseCase(rolesRepository)

export const createRolesController = new CreateRoleController(createRoleUseCase)
//Essas ligações é responsavel Por ligar cada classe na outra
