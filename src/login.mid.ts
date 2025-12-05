
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken"

@Injectable()
export class loginMid implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const bearer = req.headers['authorization'];
    if(!bearer){
        return res.status(401).send({
            message : "Token kelmadi"
        })
    }
    
    const token = bearer.split(' ')[1];
    try {
       const signToken = jwt.verify(token, process.env.JWTTOKEN as string) as {id : number};
       req["user"] = signToken?.id
    } catch (error) {
     return  res.status(401).send({message : "Token xato!!!"})
    }

    next();
  }
}
