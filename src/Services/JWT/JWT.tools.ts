import * as dotenv from 'dotenv';
dotenv.config();
import * as jsonwebtoken from "jsonwebtoken";
import { Response } from "express";
import Cyphers from '../Authentication/Security/cypher';
// console.log(process.env.JWT_SECRET);
class JWTtool {
  sign(data: any, res: Response) {
    let simetricKey = Cyphers.encrypt(data) 
    let token = jsonwebtoken.sign(
      { data, iat: Math.floor(Date.now() / 1000) - 30 },
      "BALALIKATODO" ,
      { algorithm: "PS256" }
    );
    return res.append("twj-2023", token);
  }
}

const JWT = new JWTtool();

export { JWT };
