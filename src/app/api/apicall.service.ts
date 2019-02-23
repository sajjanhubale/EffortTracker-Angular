import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ApiCallService{
private _rootApiURL="http://localhost:8080/";
constructor(private _http:HttpClient){
}

getData(routeURL){
return this._http.get(routeURL);
}
postData(routeURL,jsonRequestBody){
    return this._http.post(routeURL,jsonRequestBody);
    }
    
}