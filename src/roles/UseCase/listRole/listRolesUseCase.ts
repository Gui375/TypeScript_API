import {
  IRolesRepository,
  RolesPaginateProperties,
} from '@roles/repositories/IRolesRepository'
import { inject, injectable } from 'tsyringe'
type ListRolesUseCaseParams = {
  page: number
  limit: number
}
@injectable()
export class ListRolesUseCase {
  constructor(
    @inject('RolesRepository')
    private rolesrepository: IRolesRepository,
  ) {}

  async execute({
    page,
    limit,
  }: ListRolesUseCaseParams): Promise<RolesPaginateProperties> {
    const take = limit
    const skip = (Number(page) - 1) * take
    return this.rolesrepository.findAll({ page, skip, take })
  }
}
