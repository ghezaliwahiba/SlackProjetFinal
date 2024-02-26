import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChannelPartageService } from '../../service/servicePartage/channel-partage.service';
import { Channel } from '../models/channel';
import { ChannelServiceComponent } from '../../service/channel.service/channel.service.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent implements OnInit {
  id!: number;
  channel!: Channel;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private channelService: ChannelServiceComponent,
    private channelPartageService: ChannelPartageService,
  ) {}
  
  ngOnInit() {
      console.log('chat component');
      
      this.activatedRoute.paramMap.subscribe(params =>{
        this.id = Number(params.get('id')); //je récupère l'id de l'url
        console.log('nouveau channel (chat component) :', this.id);
        this.channelPartageService.changeIdChannel(this.id); // On envoie l'id du channel dans le service partagé
      })


    // this.activatedRoute.paramMap.pipe(
    //   switchMap(params =>{
    //     this.id = Number(params.get('id')); //je récupère l'id de l'url
    //     console.log('nouvelle route :', this.id);

    //     return [];
    //   })
    // ).subscribe(()=> {
    //   this.channelPartageService.changeIdChannel(this.id); // On envoie l'id du channel dans le service partagé
    // })


    // console.log('chat component');
    // this.id = Number(this.activatedRoute.snapshot.paramMap.get('id')); 

    // this.channelPartageService.changeIdChannel(this.id); 
  
}

}