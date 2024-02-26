import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Channel } from '../../core/models/channel';
import { ChannelServiceComponent } from '../channel.service/channel.service.component';

@Injectable({
  providedIn: 'root',
})
export class ChannelPartageService {
  // channelGeneral!: Channel ;
  // this.ChannelServiceComponent.getChannelById(0).subscribe(channel => this.channelGeneral = channel);
  
  private idChannelSource = new BehaviorSubject<number>(1);
  currentIdChannel = this.idChannelSource.asObservable();

  // private channelSource =new BehaviorSubject<Channel>()

  constructor() {}

  changeIdChannel(id: number) {
    this.idChannelSource.next(id);
  }
}
