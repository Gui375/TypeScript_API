import { v4 as uuidv4 } from 'uuid'

export class Role {
  id?: string
  name: string
  created_at: Date

  constructor() {
    //Verifica se existe id, e caso não, atribui um para o mesmo
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
