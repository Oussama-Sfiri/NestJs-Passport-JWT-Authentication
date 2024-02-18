import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class LocalAuthGuard extends AuthGuard("local"){
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log("Inside LocalAuthGuard");
        return super.canActivate(context); // this methode is going to invoke our validate methode in the "LocalStrategy"
    }
}