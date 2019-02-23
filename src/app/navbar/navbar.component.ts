import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {MessageService} from 'primeng/components/common/messageservice';
import {Message} from 'primeng/components/common/api';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  msgs: Message[] = [];
  constructor(private _router:Router,private _messageService: MessageService,private _globalService:GlobalService) { }

  ngOnInit() {
  }

  logOut(){
    window.sessionStorage.clear();
   this.msgs = [];
    this.msgs.push({severity:'success', summary:'You have successfully logged out.'});
    this._globalService.msgs=this.msgs;
    this._router.navigate(['login']);
  }

}
