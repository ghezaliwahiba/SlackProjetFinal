import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from '../../../service/messages.service/messages.service';
import { Router } from '@angular/router';
import { ChannelPartageService } from '../../../service/servicePartage/channel-partage.service';
import { ChannelServiceComponent } from '../../../service/channel.service/channel.service.component';
import { Channel } from '../../models/channel';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrl: './form-message.component.css',
})
export class FormMessageComponent implements OnInit {
  formMessage!: FormGroup;
  idChannel!: number;
  channel!: Channel;
  

  constructor(
    private fb: FormBuilder,
    private channelService: ChannelServiceComponent,
    private channelPartageService: ChannelPartageService,
    private messageService: MessagesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.channelPartageService.currentIdChannel.subscribe((id) => {
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


    this.formMessage = this.fb.group({
      content: ['', [Validators.maxLength(200), Validators.minLength(2)]],
      channel: [this.channel],
    });
  }

  // initializeForm(){
  //   this.formMessage = this.fb.group({
  //     content: ['', [Validators.maxLength(200), Validators.minLength(2)]],
  //     //channel: [this.channel],
  //   });

  // }

  save() {
    const newMessage = {
      content: this.formMessage.get('content')?.value,
      channel: this.channel,
    }

    console.log(newMessage);

    this.messageService.addMessage(newMessage).subscribe((v) => {
       this.router.navigate(['/chat/',this.idChannel]);
       this.ngOnInit();
      console.log(v);
    });
  }
}
