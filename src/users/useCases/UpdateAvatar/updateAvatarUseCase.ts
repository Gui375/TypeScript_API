// import path from 'node:path'
// import { inject, injectable } from 'tsyringe'
// import { AppError } from '@shared/Errors/AppError'
// import { User } from '@user/entites/user'
// import { IUserRepository } from '@user/repositories/IUsersRepository'
// import UploadConfig from '@config/upload'
// import  fs  from 'node:fs'

// type UpdateAvatarDTO = {
//   UserId: string
//   avatarFileName: string
// }

// @injectable()
// export class CreateUserUseCase {
//   constructor(
//     @inject('UserRepository') private userRepository: IUserRepository,
//   ) {}

//   async execute({ UserId, avatarFileName }: UpdateAvatarDTO): Promise<User> {
//     const user = await this.userRepository.findById(UserId)
//     if (user) {
//       throw new AppError('Only authenticated users can change avatar!', 401)
//     }

//     if (user.avatar) {
//       const userAvatarFilePath = path.join(UploadConfig.directory, user.avatar)
//       const userAvatarFile = await fs.promises.stat(userAvatarFilePath)
//     }
//   }
// }
