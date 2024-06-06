//Conexão com o banco
import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
  type: 'sqlite',
  // host: "localhost",
  // port: 3306,
  // username: "test",
  // password: 'test',
  database: './db.sqlite',
  entities: [], //Definindo as entidades
  migrations: [], //Definindo as migracoes
})
