import { AppError } from '@shared/Errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { Secret, verify } from 'jsonwebtoken'
import authConfig from '@config/auth'
//Método pra validar e autenticar via tokem JWT

type JwtPayloadProps = {
  sub: string
}

export const isAuthenticated = (
  request: Request, //Modificamos ela no arquivo de definição de tipo no caminho @types\express\index.d.ts
  response: Response,
  next: NextFunction,
) => {
  const authHeader = request.headers.authorization //Acossia a autorização que fica no cabeçalho a esta variavel

  if (!authHeader) {
    throw new AppError('Failed to verify access token', 401)
  } //Verificamos se o tokem foi enviado no cabeçalho

  const token = authHeader.replace('Bearer ', '') // Já pré coloca o Bearer no valor do token, que é necessário para verificação
  //Extraimos o tokem do cabeçalho
  try {
    const decoderToken = verify(token, authConfig.jwt.secret as Secret) // Verifica se o tokem é valido!
    // Nessa linha estamos pegando apenas o sub do decoder token
    const { sub } = decoderToken as JwtPayloadProps //Estamos falando que queremos pegar somente o modelo do JwtPayload
    request.user = {
      id: sub,
    }
    return next()
  } catch {
    throw new AppError('Invalid authentication token', 401)
  }
  //Faz a verificação se o método é valido
}
