import { Component, OnInit } from '@angular/core';
import { ApiCallService } from "../api/apicall.service"

@Component({
  selector: 'app-addefforts',
  templateUrl: './addefforts.component.html',
  styleUrls: ['./addefforts.component.css']
})
export class AddeffortsComponent implements OnInit {
  userName:String;
  activities=["Service Request",
  "Incident Request",
  "System Monitoring",
  "Mail Monitoring",
  "Documentation",
  "Internal Meeting",
  "Meeting with Customer",
  "EWA Preparation / Recommendation",
  "Security Audit",
  "Firewall Update",
  "NWDI Migration",
  "Proj - Meeting",
  "Effort Update",
  "Report - Weekly / Monthly",
  "Alert Monitoring / resolution",
  "Solman_setup",
  "MDM Migration",
  "Share point Migration",
  "OS Patch",
  "SAN Migration",
  "Capacity planning",
  "SSO Migration",
  "Others",
  "Basis Table Analysis",
  "MDM interface cleanup",
  "Oracle internal jobs",
  "Sysaux setting audit",
  "Certificate inventory",
  "APO Table cleanup",
  "BOP Shared memory",
  "Japan project",
  "APO Upgrade",
  "System Refresh",
  "APD Time zone",
  "LiveCache Consistancy",
  "OP Mode check",
  "License audit",
  "APO DB Jobs",
  "Fiori-NetWeaver Gateway",
  "BWP Offline backup issue",
  "Solman 7.2 upgrade",
  "SAP Profile check",
  "Loftware implementation",
  "Other project",
  "Router Migration",
  "WCEM Oracle upgrade",
  "STPI Update",
  "ECC DEV Patch Update - PLMWUI",
  "Austria project",
  "BWP Production cutover",
  "Suzhou Production cutover",
  "Database performance",
  "Tableau SSO",
  "B2B extranet for EMEA ",
  "CP0480 - 8 Sales",
  "ERD Diagram",
  "Boomi Interface",
  "CRM Language Install",
  "CP0481",
  "CP0476",
  "EDI Jobs Analysis",
  "Background Job Analysis",
  "GUI 750 project",
  "DVM report Generation"];
  categories=[
    "Support Work",
    "Enhancement",
    "Project Work"
  ];
  effort={}
  myClients=[]
  
  constructor(private _apiCall:ApiCallService) { }
  addEfforts(){
    console.log(this.effort)
    this.userName=window.sessionStorage.getItem('username');
    this.effort['consultant_name']=this.userName;
    this._apiCall.postData('/addefforts/'+this.userName,this.effort)
        .subscribe(
            successResponse => {
                
             //   var jsonData=JSON.stringify(successResponse);
                if(successResponse['flag']=="success"){
                  alert("Effors addedd successfully");
                   
                }
                else
                {
                  alert(successResponse['message']);
                }
                //alert(jsonData);
                console.log(JSON.stringify(successResponse));
            
            },
            errorResponse => {alert(errorResponse)},
            () => {console.log("Login Successful")}

        );
  }
 
  ngOnInit() {
    this._apiCall.getData("/clients/"+this.userName)
    .subscribe(
      successResponse =>{ this.myClients = successResponse['data'];
        console.log(this.myClients);
      },
      errorResonse =>{console.log(errorResonse)},
      ()=> {console.log("my effort list finished")}
    );
  }

}
