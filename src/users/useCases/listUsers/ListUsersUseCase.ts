import { injectable, inject } from 'tsyringe'
import {
  IUserRepository,
  UsersPaginateProperties,
} from '@user/repositories/IUsersRepository'

type ListUsersUseCaseParams = {
  page: number
  limit: number
}
@injectable()
export class ListUsersUseCase {
  constructor(
    @inject('UserRepository')
    private usersrepository: IUserRepository,
  ) {}

  async execute({
    page,
    limit,
  }: ListUsersUseCaseParams): Promise<UsersPaginateProperties> {
    const take = limit
    const skip = (Number(page) - 1) * take
    return this.usersrepository.findAll({ page, skip, take })
  }
}
