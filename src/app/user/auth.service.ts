import {Injectable} from '@angular/core'
import {IUser} from './user.model'
@Injectable()

export class AuthService {

    currentUser:IUser;

    loginUser(userName: string, password:string) {
        
        this.currentUser= {
                id:1,
                userName:userName,
                firstName:'John',
                lastName:'Papa'                
            }
            

        }
    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName:string, lastName:string)
    {
                   
        this.currentUser= {
            id:1,
            userName:'kreycek',
            firstName:firstName,
            lastName:lastName           
        }
        


        console.log('authService',this.currentUser);
    }
}