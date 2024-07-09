//Validação das regras antes de ir pra controller
import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { AppError } from '@shared/Errors/AppError'
import { inject, injectable } from 'tsyringe'

type DeleteRoleParamns = {
  id: string
}
//Onde fica as regras e onde é gravado o novo objeto de fato
@injectable() //Decorator responsavel por informar que esta classe sera injetavel
export class DeleteRoleUseCase {
  constructor(
    @inject('RolesRepository') //Parametro tem que ficar entre aspas pois é a forma que está declarado no container
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({ id }: DeleteRoleParamns): Promise<void> {
    const role = await this.rolesRepository.findById(id)

    if (!role) {
      throw new AppError('Role not found', 404)
    }
    await this.rolesRepository.delete(role)
  }
}
