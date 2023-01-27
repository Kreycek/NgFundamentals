import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { catchError, of, tap, VirtualTimeScheduler } from 'rxjs';
import {IUser} from './user.model'
@Injectable()

export class AuthService {

    currentUser:IUser;

    constructor(public http:HttpClient) {


    }

    loginUser(userName: string, password:string) {
       
        let loginInfo={username: userName, password: password};
        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

        return this.http.post('/api/login', loginInfo, options)
        .pipe(tap(data => {
            this.currentUser=<IUser>data["user"]
        }))
        .pipe(catchError(err=>{
            return of (false)
        }))
        // this.currentUser= {
        //         id:1,
        //         userName:userName,
        //         firstName:'John',
        //         lastName:'Papa'                
        //     }
            

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