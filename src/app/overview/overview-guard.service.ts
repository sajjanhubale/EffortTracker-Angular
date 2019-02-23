import { Injectable } from '@angular/core';

@Injectable()
export class OverviewGuardService {
roleName:string;
  constructor() { }
  canActivate()
  {
    this.roleName=window.sessionStorage.getItem("rolename");
    if(this.roleName!="administrator" && this.roleName!="manager")
    {
      alert("No access");
      return false;
    }
    else
    {
      return true;
    }
  }

}
