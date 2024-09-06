import { AppError } from '@shared/Errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { Secret, verify } from 'jsonwebtoken'
import authConfig from '@config/auth'
//Método pra validar e autenticar via tokem JWT
export const isAuthenticated = (
  request: Request,
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
    verify(token, authConfig.jwt.secret as Secret) // Verifica se o tokem é valido!
    return next()
  } catch {
    throw new AppError('Invalid authentication token', 401)
  }
  //Faz a verificação se o método é valido
}
