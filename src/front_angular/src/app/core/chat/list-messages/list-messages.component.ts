import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { MessagesService } from '../../../service/messages.service/messages.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css',
})
export class ListMessagesComponent implements OnInit {
  messagesList: Message[] = [];

  constructor(private messagesService: MessagesService) {}

  ngOnInit() {
    this.messagesService.getAllMessages().subscribe({
      next: (messages:Message[]) => {
        console.log(messages[0])
        this.messagesList = messages;
      },
    });
  }

}
