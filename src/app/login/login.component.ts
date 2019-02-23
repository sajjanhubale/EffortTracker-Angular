import { Component,OnInit} from "@angular/core";
import {ApiCallService} from '../api/apicall.service'
import {Router} from '@angular/router'
import {NavbarComponent} from "../navbar/navbar.component"
import {Message} from 'primeng/components/common/api';
import {GlobalService} from '../global.service';
@Component({
    selector:"app-login",
    templateUrl:"./login.component.html",
    styleUrls:['./login.component.css']
})

export class LoginComponent 
{
    msgs: Message[] = [];
    pageTitle:string= "Login Page"
    result={}
    user={}
    constructor(private _apiCall:ApiCallService,private _router:Router,private _navbarComponent:NavbarComponent,private _globalService:GlobalService){

    }
    ngOnInit(){
        this.msgs=this._globalService.msgs;
        this._globalService.msgs=null;
       console.log(this.msgs);
    }
    onLogin(){
        
        this._apiCall.postData('/login',this.user)
        .subscribe(
            successResponse => {
                
             //   var jsonData=JSON.stringify(successResponse);
                if(successResponse['flag']){

                    window.sessionStorage.setItem("username",this.user['username']);
                    window.sessionStorage.setItem("rolename",successResponse['rolename'])
                    this._router.navigate(['overview']);
                }
                else
                {
                  alert("Username or Password is incorrect!");  
                }
                //alert(jsonData);
                console.log(JSON.stringify(successResponse));
            
            },
            errorResponse => {alert(errorResponse)},
            () => {console.log("Login Successful")}

        );
    }
}