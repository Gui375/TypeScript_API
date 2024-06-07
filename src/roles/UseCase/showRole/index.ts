import { RolesRepository } from '@roles/repositories/RolesRepository'
import { showRoleUseCase } from './showRoleUseCase'
import { showRoleController } from './showRoleController'

const showRepository = RolesRepository.getInstance() //Estamos apenas chamando uma instancia que já existe, todos os métodos da controler que usa role, vão instanciar RoleRepositor

const ShowRoleUseCase = new showRoleUseCase(showRepository)

export const showRolesController = new showRoleController(ShowRoleUseCase)
//Essas ligações é responsavel Por ligar cada classe na outra
