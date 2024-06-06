//Conexão com o banco
import { DataSource } from 'typeorm'
import { CreateRolesTable1717677183833 } from './migrations/1717677183833-CreateRolesTable'
import { Role } from '@roles/http/routes/entities/Role'

export const dataSource = new DataSource({
  type: 'sqlite',
  // host: "localhost",
  // port: 3306,
  // username: "test",
  // password: 'test',
  database: './db.sqlite',
  entities: [Role], //Definindo as entidades
  migrations: [CreateRolesTable1717677183833], //Definindo as migracoes
})

//Comando pra executar as migration npm run typeorm -- -d ./src/shared/typeorm/index.ts  migration:run
