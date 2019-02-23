import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  roleName:string;
  title = 'app';
  constructor(private _router:Router){
  }

  ngOnInit() {
    console.log("*******************")
    console.log(this._router.url);
    console.log("*******************")
    this.roleName=window.sessionStorage.getItem("rolename");
    console.log(this.roleName)
    // if(this.roleName)
    // {
  
    //   this._router.navigate(['overview']);
    // }
    // else
    // {
    //   this._router.navigate(['login']);
    // }
    if(!this.roleName)
      this._router.navigate(['login']);
    }
}
