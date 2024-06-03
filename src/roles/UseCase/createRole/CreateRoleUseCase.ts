import { Role } from '@roles/http/routes/entities/Role'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/Errors/AppError'

type CreateRoleDTO = {
  name: string
}
//Onde fica as regras e onde é gravado o novo objeto de fato
export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute({ name }: CreateRoleDTO): Role {
    const roleAreadyExists = this.rolesRepository.findByName(name)

    if (roleAreadyExists) {
      throw new AppError('Role already exists')
    }
    return this.rolesRepository.create({ name })
  }
}
