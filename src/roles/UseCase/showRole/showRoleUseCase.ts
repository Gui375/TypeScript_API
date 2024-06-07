//Validação das regras antes de ir pra controller
import { Role } from '@roles/http/routes/entities/Role'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/Errors/AppError'

type ShowRoleParamns = {
  id: string
}
//Onde fica as regras e onde é gravado o novo objeto de fato
export class showRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({ id }: ShowRoleParamns): Promise<Role> {
    const role = await this.rolesRepository.findById(id)

    if (!role) {
      throw new AppError('Role not found', 404)
    }
    return role
  }
}
