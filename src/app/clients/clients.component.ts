import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api/apicall.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  userName:String;
  selectedClients:any;
  selectedData:any;
  jsonData:any;
  cols:any;
  myClients=[]
  client={}
  constructor(private _apiCall:ApiCallService) { }

  ngOnInit() {
     //assign  field name and header for effort tracker table
     this.cols = [
      { field: 'client_name', header: 'Client Name' },
      { field: 'description', header: 'Description' },
      { field: 'start_date', header: 'Start Date' },
      { field: 'end_date', header: 'End Date' },
      { field: 'created_date', header: 'Created Date' },
      { field: 'last_updated_by', header: 'Last Updated By' },
      { field: 'last_updated_date', header: 'Last Updated by' },
  ];
   
  this.loadClients();
  }

  loadClients(){
    this._apiCall.getData("http://localhost:8080/clients/"+this.userName)
    .subscribe(
      successResponse =>{ this.myClients = successResponse['data'];
        console.log(this.myClients);
      },
      errorResonse =>{console.log(errorResonse)},
      ()=> {console.log("my effort list finished")}
    );
  }
  addClient(){
    var date=new Date().toISOString();
    console.log(this.client)
    this.userName=window.sessionStorage.getItem('username');
    this.client['created_date']=date;
    this.client['last_updated_by']=this.userName;
    this.client['last_updated_date']=date;
    this._apiCall.postData('http://localhost:8080/addclient/'+this.userName,this.client)
        .subscribe(
            successResponse => {
                
             //   var jsonData=JSON.stringify(successResponse);
                if(successResponse['flag']=="success"){
                  alert("Client addedd successfully");
                  this.ngOnInit();
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

  //delete the selected client
 deleteClient(){
    
  if(this.selectedClients.length==1)
  {
   this.selectedData=this.selectedClients[0];
    this.jsonData={
       "_id":this.selectedData["_id"]
    }
   this._apiCall.postData("http://localhost:8080/deleteclient/"+this.userName,this.jsonData)
   .subscribe(
     successResponse =>{
     if(successResponse['flag']=="success"){
       this.loadClients(); 
       alert("Client deleted successfully");
     }
     else
     {
       alert("Failed to delete");
     }
                         
     },
     errorResonse =>{console.log(errorResonse)},
     ()=> {console.log("my effort list finished")}
   );
  }
  else
  {
    alert("Please select only one record!");
  }

}

}
