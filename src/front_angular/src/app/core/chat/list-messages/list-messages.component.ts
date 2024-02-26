import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { MessagesService } from '../../../service/messages.service/messages.service';
import { ChannelPartageService } from '../../../service/servicePartage/channel-partage.service';
import { Channel } from '../../models/channel';
import { ChannelServiceComponent } from '../../../service/channel.service/channel.service.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessagesStoreService } from '../../../service/messages-store/messages-store.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css',
})

export class ListMessagesComponent implements OnInit {
  messagesList: Message[] = [];
  channel!: Channel;
  idChannel!: number;
  idMessage!: number;
  messagesChannel!: Message[];
  buttonsOpen: boolean[] = [];
  openUpdateMessage = 'form-message-hidden';

  // Sur la même page: modifier le message
  formMessage!: FormGroup;
  lengthMessages!: number;
  

  constructor(
    private messagesService: MessagesService,
    private messagesStoreService: MessagesStoreService,
    private channelPartageService: ChannelPartageService,
    private channelService: ChannelServiceComponent,
    private fb: FormBuilder,
  ) {}

  //Partie Channel
  ngOnInit() {
    // Partie Channel - on récupère le channel
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

    // Partie Message
    this.messagesService.getAllMessages().subscribe({
      next: (messages: Message[]) => {
        messages.forEach((element) => {
          //je trie les éléments du channel
          if (element.channel?.id == this.idChannel) {
            console.log(element);

            //Je rajoute les éléments dans un nouveau tableau
            this.messagesChannel.push(element);
          }
        });
        this.messagesList = messages;
        this.messagesList.forEach(() => this.buttonsOpen.push(false));
      },
    });
  }

  openButtons(index: number) {
    this.buttonsOpen[index] = !this.buttonsOpen[index];
  }

  delete(id: number | undefined) {
    if (id)
      this.messagesService.deleteMessage(id).subscribe((message) => {
        console.log("Message de l'ID : ", id);
        console.log(message);
        this.messagesService
          .getAllMessages()
          .subscribe((messages) => (this.messagesList = messages));
      });
  }

  update(id: number | undefined) {
    if (id) {
      this.idMessage = id;
      this.messagesService
        .getMessagesById(this.idMessage)
        .subscribe((message) => {

          this.formMessage = this.fb.group({
            content: [message.content || ''],
          });
        });
    }

    if (this.openUpdateMessage == 'form-message-hidden') {
      this.openUpdateMessage = 'form-message-open';
    } else {
      this.openUpdateMessage = 'form-message-hidden';
    }
  }

  save() {
    const newMessage: Message = {
      ...this.formMessage.value,
      id: this.idMessage,
    };
    this.messagesService.updateMessage(newMessage).subscribe();
    this.messagesStoreService.updateMessage(newMessage);
    // Tenter de ra-fraichir la page
  }
}
