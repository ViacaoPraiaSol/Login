import jwt, { SignOptions} from 'jsonwebtoken'
import 'dotenv/config'
import { NextFunction, Request, Response } from 'express'


const secret = process.env.JWT_SECRET as string

const sign = (payload: { id: string, nome: string, email: string}, expiresIn = '3h') => {
  const jwtConfig: SignOptions = {
    algorithm: 'HS256',
    expiresIn
  }
  return jwt.sign(payload, secret, jwtConfig)
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')
    if(!token) return res.status(401).json({ message: 'Unauthorized'})
    const decoded = jwt.verify(token, secret)
    res.locals.user = decoded
    next()
  } catch (error) {
    next(error)
  }
}

export {sign, verifyToken}