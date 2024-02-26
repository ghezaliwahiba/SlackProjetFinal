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

  //BehaviorSubject qui stocke un number, initialement défini à 1.
  //Un BehaviorSubject est un type d'observable qui émet toujours la valeur
  //actuelle à ses abonnés lorsqu'ils s'abonnent.
  private idChannelSource = new BehaviorSubject<number>(1);

  currentIdChannel = this.idChannelSource.asObservable();

  
  constructor() {}

  changeIdChannel(id: number) {
    console.log("change id");
    
    this.idChannelSource.next(id);
  }
}

//Ce service permet de partager l'ID d'un canal entre différentes parties de l'application. Lorsque cet ID change,
//les parties de l'application qui s'abonnent à currentIdChannel seront notifiées de ce changement.
