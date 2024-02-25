import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { MessagesService } from '../../../service/messages.service/messages.service';
import { ChannelPartageService } from '../../../service/servicePartage/channel-partage.service';
import { Channel } from '../../models/channel';
import { ChannelServiceComponent } from '../../../service/channel.service/channel.service.component';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css',
})
export class ListMessagesComponent implements OnInit {
  messagesList: Message[] = [];
  channel!: Channel;
  idChannel!: number;
  messagesChannel!: Message[];

  constructor(
    private messagesService: MessagesService,
    private channelPartageService: ChannelPartageService, 
    private channelService: ChannelServiceComponent
  ) {}

  ngOnInit() {

    //On récupère le channel 
    this.channelPartageService.currentIdChannel.subscribe((id) => {
      this.messagesChannel = []; //j'initialise les messages du channel vide 

      this.idChannel = id;
      console.log(this.idChannel);

      this.channelService
        .getChannelById(this.idChannel)
        .subscribe((channel) => {
          console.log(channel);

          this.channel = channel;
          // this.initializeForm();
        });
    });

    console.log(this.channel);



    this.messagesService.getAllMessages().subscribe({
      next: (messages: Message[]) => {
        messages.forEach(element => {
          
          //je trie les éléments du channel
          if(element.channel?.id == this.idChannel){
            console.log(element);
            
            //Je rajoute les éléments dans un nouveau tableau
            this.messagesChannel.push(element);
          }
          
        });
        //console.log(messages[0])
        this.messagesList = messages;
      },
    });
  }
}
