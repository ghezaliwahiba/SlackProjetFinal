import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { MessagesService } from '../../../service/messages.service/messages.service';
import { ChannelPartageService } from '../../../service/servicePartage/channel-partage.service';
import { Channel } from '../../models/channel';
import { ChannelServiceComponent } from '../../../service/channel.service/channel.service.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css',
})
export class ListMessagesComponent implements OnInit {
  //Partie Channel
  messagesList!: Message[];
  channel!: Channel;
  idChannel!: number;
  messagesChannel!: Message[];

  //Partie message
  buttonsOpen = 'btns-hidden'; // recherche CSS

  // Sur la même page: modifier le message
  id!: number | null;
  formMessage!: FormGroup;
  lengthMessages!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private messagesService: MessagesService,
    private channelPartageService: ChannelPartageService,
    private channelService: ChannelServiceComponent,
    private fb: FormBuilder
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
        });
    });

    //On récupère tous les messages puis les messages du channel
    this.messagesService.getAllMessages().subscribe({
      next: (messages: Message[]) => {
        messages.forEach((element) => {
          //je trie les éléments du channel
          if (element.channel?.id == this.idChannel) {
            //Je rajoute les éléments dans un nouveau tableau
            this.messagesChannel.push(element);
          }
        });
      },
    });
  }

  ngUpdate() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.messagesService.getMessagesById(this.id).subscribe((message) => {
      console.log(message);

      this.formMessage = this.fb.group({
        content: [message.content || ''],
      });
    });
  }

  openButtons() {
    console.log('bouton activé');
    if (this.buttonsOpen == 'btns-hidden') {
      this.buttonsOpen = 'btns-open';
    } else {
      this.buttonsOpen = 'btns-hidden';
    }
  }

  delete(id: number | undefined) {
    if(id != null){
    this.messagesService.deleteMessage(id).subscribe((message) => {
      console.log(message);
      this.messagesService
        .getAllMessages()
        .subscribe((messages) => (this.messagesList = messages));
    });}
  }

  save() {
    console.log(this.formMessage.value);
    this.messagesService
      .updateMessage({ ...this.formMessage.value, id: this.id })
      .subscribe((message) => console.log(message));
  }
}
