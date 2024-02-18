import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt"; // from passport-jwt

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    
    constructor(){
        super({ // configuration de la strategy jwtStrategy
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // ce champ indique qu'on va extracter le jwt token from the auth header comme un bearer token
            ignoreExpiration : false, // ce champ indique qu'on doit prendre l'expiration de jwt token en consideration et envoyer un refresh-token au client
            secretOrKey: "LKJCAOZ92839UCFHNKHFNC1P93CAOZIUN09", // ce secret key doit etre le meme secret key qu'on a utilisé pour fait "register" du module jwt dans "AuthModule"
        });
    }

    validate(payload: any){
        console.log("Inside JWT Strategy Validate")
        console.log(payload);
        return payload;
    }

}