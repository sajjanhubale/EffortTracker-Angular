import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api/apicall.service';

@Component({
  templateUrl: './efforttracker.component.html',
  styleUrls: ['./efforttracker.component.css']
 
})
export class EfforttrackerComponent implements OnInit {
  userName: string = window.sessionStorage.getItem("username");
  filteredEfforts:any=[];
  myEfforts:any=[];
  finalFilterData:any=[];
  _filterStart:Date;
  _filterEnd:Date;
  _selectedEfforts:any;
  selectedData:string;
  jsonData={};
  
  get selectedEfforts() : any {
    return this._selectedEfforts;
  }
  set selectedEfforts(v : any) {
      this._selectedEfforts = v;
    console.log(this._selectedEfforts);
  }
  get filterEnd() : Date {
    return this._filterEnd;
  }
  set filterEnd(v : Date) {
      this._filterEnd = v;
      if(this._filterStart)
        this.filteredEfforts= this.loadEffortData();
  }
  get filterStart() : Date {
    return this._filterStart;
  }
  set filterStart(v : Date) {
      this._filterStart = v;
      if(this._filterEnd)
        this.filteredEfforts= this.loadEffortData();
  }
  constructor(private _apiCall:ApiCallService) { }
  filterCategory:string="consultant_name";
    _filterData : string ; 
  get filterData() : string {
        return this._filterData;
    }
  set filterData(v : string) {
        this._filterData = v;
        this.filteredEfforts= this.filterData ? this.performFilter(this.filterData) : this.myEfforts;
  }

cols: any[];
  ngOnInit(){
    //assign  field name and header for effort tracker table
    this.cols = [
      { field: 'client_name', header: 'Client Name' },
      { field: 'consultant_name', header: 'Consultant Name' },
      { field: 'Date', header: 'Date' },
      { field: 'customer_meeting_details', header: 'Customer / Meeting - Details' },
      { field: 'activity', header: 'Activity' },
      { field: 'category', header: 'Category' },
      { field: 'description', header: 'Detailed Description' },
      { field: 'ticket_reference', header: 'Ticket Reference' },
      { field: 'efforts_time', header: 'Efforts in Time' }
     
  ];
    
  }
 //load the effort data initially
  loadEffortData():any{
    this.jsonData={
      startDate:this._filterStart,
      endDate:this._filterEnd
    }
    
    this._apiCall.postData("/myefforts/"+this.userName+"/"+window.sessionStorage.getItem("rolename"),this.jsonData)
    .subscribe(
      successResponse =>{ this.myEfforts = successResponse['data'];
      console.log(this.myEfforts);
       return  this.filteredEfforts=this.myEfforts;
                          
      },
      errorResonse =>{console.log(errorResonse)},
      ()=> {console.log("my effort list finished")}
    );
  }

  //filter the effort by category with specific value  
  performFilter(filterdBy: string):any {
    console.log(filterdBy);
    console.log(this.filterCategory);
    filterdBy= filterdBy.toLocaleLowerCase();
    return this.myEfforts.filter((effort:any) =>
          effort[this.filterCategory].toLocaleLowerCase().indexOf(filterdBy) !== -1)
 }

 //delete the selected efforts
 deleteEffort(){
    
   if(this._selectedEfforts.length==1)
   {
    this.selectedData=this.selectedEfforts[0];
     this.jsonData={
        "_id":this.selectedData["_id"]
     }
    this._apiCall.postData("/deleteeffort/"+this.userName,this.jsonData)
    .subscribe(
      successResponse =>{ 
      if(successResponse['flag']=="success"){
        this.filteredEfforts= this.loadEffortData(); 
        alert("Effort deleted successfully");
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
