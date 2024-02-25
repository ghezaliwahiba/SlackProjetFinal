import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { MessagesService } from '../../../service/messages.service/messages.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css',
})
export class ListMessagesComponent implements OnInit {
  messagesList: Message[] = [];
  buttonsOpen = 'btns-hidden'; // recherche CSS

  // Sur la même page: modifier le message
  id!: number | null;
  formMessage!: FormGroup;
  lengthMessages!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private messagesService: MessagesService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.messagesService.getAllMessages().subscribe({
      next: (messages: Message[]) => {
        this.messagesList = messages;
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

  delete(id: number) {
    this.messagesService.deleteMessage(id).subscribe((message) => {
      console.log(message);
      this.messagesService
        .getAllMessages()
        .subscribe((messages) => (this.messagesList = messages));
    });
  }

  save() {
    console.log(this.formMessage.value);
    this.messagesService
      .updateMessage({ ...this.formMessage.value, id: this.id })
      .subscribe((message) => console.log(message));
  }
}
