import { IUserRepository } from '@user/repositories/IUsersRepository'
import { UserRepository } from '@user/repositories/UserRepository'
import { CreateUserUseCase } from '@user/useCases/createUser/CreateUserUseCase'
import { ListUsersUseCase } from '@user/useCases/listUsers/ListUsersUseCase'
import { container } from 'tsyringe'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)

container.registerSingleton('CreateUserUseCase', CreateUserUseCase) //Parei aqui

container.registerSingleton('ListUserUseCase', ListUsersUseCase) //Parei aqui
