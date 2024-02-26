import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChannelPartageService } from '../../service/servicePartage/channel-partage.service';
import { Channel } from '../models/channel';
import { ChannelServiceComponent } from '../../service/channel.service/channel.service.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{
  id!: number;
  channel!: Channel;

  constructor(private activatedRoute:  ActivatedRoute,private channelService: ChannelServiceComponent ,private channelPartageService: ChannelPartageService){

  }

  ngOnInit(){
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id')); //je récupère l'id de l'url
    this.channelPartageService.changeIdChannel(this.id); // On envoie l'id du channel dans le service partagé



  }

}
