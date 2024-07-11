import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('users') //Decorator do typeORM | 'role' = nome da tabela
export class User {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  isAdmin: boolean

  @Column()
  avatar?: string //Esse campo é opcional

  @CreateDateColumn()
  created_at: Date

  constructor() {
    //Verifica se existe id, e caso não, atribui um para o mesmo
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
