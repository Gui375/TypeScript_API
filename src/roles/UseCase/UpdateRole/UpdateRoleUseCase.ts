//Validação das regras antes de ir pra controller
import { Role } from '@roles/http/routes/entities/Role'
import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { AppError } from '@shared/Errors/AppError'
import { inject, injectable } from 'tsyringe'

type UpdateRoleDTO = {
  id: string
  name: string
}
//Onde fica as regras e onde é gravado o novo objeto de fato
@injectable() //Fala que é uma classe que pode ser injetada uma dependencia
export class UpdateRoleUseCase {
  constructor(
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({ id, name }: UpdateRoleDTO): Promise<Role> {
    const role = await this.rolesRepository.findById(id)
    if (!role) {
      throw new AppError('Role not found', 404)
    }
    const roleWithSameName = await this.rolesRepository.findByName(name)
    if (roleWithSameName && role.name !== roleWithSameName.name) {
      throw new AppError('Role name not informed or already in use')
    }
    role.name = name
    return this.rolesRepository.save(role)
  }
}
