import { IUserRepository } from '@user/repositories/IUsersRepository'
import { UserRepository } from '@user/repositories/UserRepository'
import { CreateLoginController } from '@user/useCases/createLogin/CreateLoginController'
import { CreateUserController } from '@user/useCases/createUser/CreateUserController'
import { ListUsersController } from '@user/useCases/listUsers/ListUsersCaseController'
import { container } from 'tsyringe'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)

container.registerSingleton('CreateUserController', CreateUserController) //Parei aqui

container.registerSingleton('ListUserController', ListUsersController) //Parei aqui

container.registerSingleton('CreateLoginController', CreateLoginController)
