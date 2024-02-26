import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Channel } from '../../core/models/channel';
import { ChannelServiceComponent } from '../channel.service/channel.service.component';

@Injectable({
  providedIn: 'root',
})
export class ChannelPartageService {
  // channelGeneral!: Channel ;
  // this.ChannelServiceComponent.getChannelById(0).subscribe(channel => this.channelGeneral = channel);

  //BehaviorSubject qui stocke un number, initialement défini à 1.
  //Un BehaviorSubject est un type d'observable qui émet toujours la valeur
  //actuelle à ses abonnés lorsqu'ils s'abonnent.
  private idChannelSource = new BehaviorSubject<number>(1);

  currentIdChannel = this.idChannelSource.asObservable();

  // private channelSource =new BehaviorSubject<Channel>()

  // Partie pour le channel composant
  private readonly _channels: BehaviorSubject<Channel[]> = new BehaviorSubject<
    Channel[]
  >([]);
  readonly channels$: Observable<Channel[]> = this._channels.asObservable();

  get channels(): Channel[] {
    return this._channels.getValue();
  }

  set channels(val: Channel[]) {
    this._channels.next(val);
  }

  updateChannel(updateChannel: Channel) {
    const currentChannel = [...this.channels];
    const index = currentChannel.findIndex(
      (channel) => channel.id === updateChannel.id
    );
    currentChannel[index] = updateChannel;
    this.channels = currentChannel;
  }

  constructor() {}

  changeIdChannel(id: number) {
    console.log("change id");
    
    this.idChannelSource.next(id);
  }
}

//Ce service permet de partager l'ID d'un canal entre différentes parties de l'application. Lorsque cet ID change,
//les parties de l'application qui s'abonnent à currentIdChannel seront notifiées de ce changement.
