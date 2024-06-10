import { RolesRepository } from '@roles/repositories/RolesRepository'
import { deleteRoleUseCase } from './DeleteRoleUseCase'
import { deleteRoleController } from './DeleteRoleController'

const deleteRepository = RolesRepository.getInstance() //Estamos apenas chamando uma instancia que já existe, todos os métodos da controler que usa role, vão instanciar RoleRepositor

const DeleteRoleUseCase = new deleteRoleUseCase(deleteRepository)

export const deleteRolesController = new deleteRoleController(DeleteRoleUseCase)
//Essas ligações é responsavel Por ligar cada classe na outra
