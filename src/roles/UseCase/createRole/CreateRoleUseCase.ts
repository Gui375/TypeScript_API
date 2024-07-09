//Validação das regras antes de ir pra controller
import { Role } from '@roles/http/routes/entities/Role'
import { IRolesRepository } from '@roles/repositories/IRolesRepository'
// import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/Errors/AppError'
import { inject, injectable } from 'tsyringe'

type CreateRoleDTO = {
  name: string
}
//Onde fica as regras e onde é gravado o novo objeto de fato
@injectable()
export class CreateRoleUseCase {
  constructor(
    @inject('RolesRepository') // Com esse parametro o arquivo index.ts não faz mais sentido, porque ele faz justamente o que o arquivo faz
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({ name }: CreateRoleDTO): Promise<Role> {
    const roleAreadyExists = await this.rolesRepository.findByName(name)

    if (roleAreadyExists) {
      throw new AppError('Role already exists')
    }
    return this.rolesRepository.create({ name })
  }
}
