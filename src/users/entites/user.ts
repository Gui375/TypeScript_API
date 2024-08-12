import { Role } from '@roles/http/routes/entities/Role'
import { Exclude } from 'class-transformer'
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm'
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
  @Exclude() //Decoretor responsavel por ocultar o atributo do retorno
  password: string

  @Column()
  isAdmin: boolean

  @Column()
  avatar?: string //Esse campo é opcional

  @ManyToOne(() => Role, {
    cascade: true, //Quando esta opção esta como true, tudo que for alterado aqui, será propagado pra entidade relacionada no caso Role
  })
  role: Role // Na migration temos esse campo criado lá roleId, no typeORM ele automaticamente identifica pra gente que é na propriedade role e ignora o Id

  @CreateDateColumn()
  created_at: Date

  constructor() {
    //Verifica se existe id, e caso não, atribui um para o mesmo
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
