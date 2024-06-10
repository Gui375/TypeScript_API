import { RolesRepository } from '@roles/repositories/RolesRepository'
import { UpdateRoleUseCase } from './UpdateRoleUseCase'
import { UpdateRoleController } from './UpdateRoleController'

const updateRepository = RolesRepository.getInstance() //Estamos apenas chamando uma instancia que já existe, todos os métodos da controler que usa role, vão instanciar RoleRepositor

const updateRoleUseCase = new UpdateRoleUseCase(updateRepository)

export const updateRolesController = new UpdateRoleController(updateRoleUseCase)
//Essas ligações é responsavel Por ligar cada classe na outra
