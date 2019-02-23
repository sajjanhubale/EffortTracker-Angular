import { Injectable } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Injectable()
export class GlobalService {
  msgs: Message[] = [];
  constructor() { }

  setMessage(newMsgs:Message[]){
    this.msgs=newMsgs;
  }
  getMessage():Message[]{
    return this.msgs;
  }
}
