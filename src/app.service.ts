import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from "jsonwebtoken"

@Injectable()
export class AppService {



  getHello(userID :number): any {

    const token = jwt.sign({ id: 10 }, process.env.JWTTOKEN as string, { expiresIn: "1h" });

    return {
      id: `Sizga yashiringan id ${userID}`
    };


  }
}
