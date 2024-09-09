declare namespace Express {
  interface Request {
    user: {
      id: string
    }
  }
}
//OBs ele não substitui tudo que existe no original, ele mantem o que já existe e acrescenta o que estamos colocando
//Arquivo criado para alterar a interface do Request no express e poder aceitar novos campos buscados
