import { Role } from '@roles/http/routes/entities/Role'
import { RolesRepository } from '@roles/repositories/RolesRepository'

export class ListRolesUseCase {
  constructor(private rolesrepository: RolesRepository) {}

  execute(): Role[] {
    //Role[] significa que ele esta esperando de retorno um array de Role
    return this.rolesrepository.findAll()
  }
}
