import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';

const dummyUsers = [
    {
        id: 1,
        username: "anson",
        password: "123",
    },
    {
        id: 2,
        username: "jack",
        password: "456",
    },
    {
        id: 3,
        username: "emma",
        password: "789",
    },
]

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService){} // injecter le JwtService object par defaut

    validateUser({username, password}: AuthPayloadDto){ // ou (authPayload: AuthPayloadDto)
        const findUser = dummyUsers.find((user) => user.username === username);
        if(!findUser){
            return null;
        }else if(findUser.password === password){
            const {password, ...userDetails} = findUser;
            return this.jwtService.sign(userDetails); // signing in the user without storing the password
        }
    }

}
