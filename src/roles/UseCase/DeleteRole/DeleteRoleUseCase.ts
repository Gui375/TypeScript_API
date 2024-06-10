//Validação das regras antes de ir pra controller
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/Errors/AppError'

type DeleteRoleParamns = {
  id: string
}
//Onde fica as regras e onde é gravado o novo objeto de fato
export class deleteRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({ id }: DeleteRoleParamns): Promise<void> {
    const role = await this.rolesRepository.findById(id)

    if (!role) {
      throw new AppError('Role not found', 404)
    }
    await this.rolesRepository.delete(role)
  }
}
