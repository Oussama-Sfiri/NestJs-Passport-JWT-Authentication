import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local"; // from passport-local
import { AuthService } from "../auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly authServie: AuthService){
        super();
    }

    validate(username: string, password: string){
        const userToken = this.authServie.validateUser({username, password});
        console.log("Inside LocalStrategy ==> Token :"+userToken);
        if(!userToken){
            throw new UnauthorizedException();
        }else{
            return userToken;
        }
    }
}