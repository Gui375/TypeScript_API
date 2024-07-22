import { Role } from '@roles/http/routes/entities/Role'
import { User } from '@user/entites/user'

export type CreateUserDTO = {
  name: string
  email: string
  password: string
  isAdmin: boolean
  role: Role
}

export type PaginateParams = {
  //Criando o paginador
  page: number
  skip: number
  take: number
} //Parametros do paginator

export type UsersPaginateProperties = {
  per_page: number
  total: number
  current_page: number
  data: User[]
} //Retorno do paginator

export interface IUserRepository {
  create({ name, email, password, isAdmin, role }: CreateUserDTO): Promise<User>
  save(user: User): Promise<User>
  findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<UsersPaginateProperties>
  findById(id: string): Promise<User | null>
  findByName(name: string): Promise<User | null>
  delete(user: User): Promise<void>
}
