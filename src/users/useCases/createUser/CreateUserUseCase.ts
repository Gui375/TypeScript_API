import { inject, injectable } from 'tsyringe'
import { hash } from 'bcryptjs'
import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { AppError } from '@shared/Errors/AppError'
import { User } from '@user/entites/user'
import { IUserRepository } from '@user/repositories/IUsersRepository'

type CreateUserDTO = {
  name: string
  email: string
  password: string
  isAdmin: boolean
  roleId: string
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UserRepository') private userRepository: IUserRepository,
    @inject('RolesRepository') private rolesRepository: IRolesRepository,
  ) {}

  async execute({
    name,
    email,
    password,
    isAdmin,
    roleId,
  }: CreateUserDTO): Promise<User> {
    const emailExists = await this.userRepository.findByEmail(email)
    if (emailExists) {
      throw new AppError('Email address already used')
    }
    const role = await this.rolesRepository.findById(roleId)
    if (!role) {
      throw new AppError('Role not found', 404)
    }
    const hashedPassword = await hash(password, 10)

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      isAdmin,
      role,
    })
    return user
  }
}
