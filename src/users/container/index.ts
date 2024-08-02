import { IUserRepository } from '@user/repositories/IUsersRepository'
import { UserRepository } from '@user/repositories/UserRepository'
import { container } from 'tsyringe'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
