//Validação das regras antes de ir pra controller
import { Role } from '@roles/http/routes/entities/Role'
import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { AppError } from '@shared/Errors/AppError'
import { inject, injectable } from 'tsyringe'

type ShowRoleParamns = {
  id: string
}
//Onde fica as regras e onde é gravado o novo objeto de fato
@injectable()
export class ShowRoleUseCase {
  constructor(
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({ id }: ShowRoleParamns): Promise<Role> {
    const role = await this.rolesRepository.findById(id)

    if (!role) {
      throw new AppError('Role not found', 404)
    }
    return role
  }
}
