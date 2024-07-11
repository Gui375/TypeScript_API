//Conexão com o banco
import { DataSource } from 'typeorm'
import { CreateRolesTable1717677183833 } from './migrations/1717677183833-CreateRolesTable'
import { Role } from '@roles/http/routes/entities/Role'
import { CreateUsersTable1720727564124 } from './migrations/1720727564124-CreateUsersTable'
import { AddRoleIdToUsersTable1720728804501 } from './migrations/1720728804501-AddRoleIdToUsersTable'
import { User } from '@user/entites/user'

export const dataSource = new DataSource({
  type: 'sqlite',
  // host: "localhost",
  // port: 3306,
  // username: "test",
  // password: 'test',
  database: './db.sqlite',
  entities: [Role, User], //Definindo as entidades
  migrations: [
    CreateRolesTable1717677183833,
    CreateUsersTable1720727564124,
    AddRoleIdToUsersTable1720728804501,
  ], //Definindo as migracoes   Usamos esse campo apenas para criar a tabela no banco de dados
})

//Comando pra executar as migration npm run typeorm -- -d ./src/shared/typeorm/index.ts  migration:run
