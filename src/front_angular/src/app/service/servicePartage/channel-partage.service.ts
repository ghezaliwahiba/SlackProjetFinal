import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Channel } from '../../core/models/channel';
import { ChannelServiceComponent } from '../channel.service/channel.service.component';

@Injectable({
  providedIn: 'root',
})
export class ChannelPartageService {
  
  private idChannelSource = new BehaviorSubject<number>(1);
  currentIdChannel = this.idChannelSource.asObservable();

  
  constructor() {}

  changeIdChannel(id: number) {
    console.log("change id");
    
    this.idChannelSource.next(id);
  }
}
