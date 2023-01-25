
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

    @Component({
     templateUrl:'./login.component.html',
     styles:[`em {float:right; color:#E05C65; padding-left:10px;}`]
    })
    export class LoginComponent {
        userName:string | undefined
        password:string | undefined
        mouseoverLogin:any

        constructor(
            private authService:AuthService,
            private route:Router
            ) {
        }

        login(formValues:any, obj:any){
            console.log(obj.userName);
           this.authService.loginUser(obj.userName,obj.password);
        }  
        
        cancel() {
            this.route.navigate(['events'])
        }
    }
    
