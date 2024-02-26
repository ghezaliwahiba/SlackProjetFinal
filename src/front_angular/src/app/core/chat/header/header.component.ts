import { Component } from '@angular/core';
import { ChannelServiceComponent } from '../../../service/channel.service/channel.service.component';
import { Channel } from '../../models/channel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  channelList: Channel[] = [];
  idChannel!: number;
  buttonsOpen = 'btns-hidden'; // recherche CSS
  modalUpdateOpen = 'modal-hidden';
  modalDeleteOpen = 'modal-hidden';

  // Sur la même page: modifier le message
  id!: number | null;
  formChannel!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private channelService: ChannelServiceComponent,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.channelService.getAllChannels().subscribe({
      next: (channels: Channel[]) => {
        //console.log(channels);
        this.channelList = channels;
      },
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

  modalUpdate() {
    console.log('MODAL UPDATE');
    if (this.modalUpdateOpen == 'modal-hidden') {
      this.modalUpdateOpen = 'modal-open';
    } else {
      this.modalUpdateOpen = 'modal-hidden';
    }
  }

  modalDelete(){
    console.log('MODAL DELETE');
    if (this.modalDeleteOpen == 'modal-hidden') {
      this.modalDeleteOpen = 'modal-open';
    } else {
      this.modalDeleteOpen = 'modal-hidden';
    }
  }

  update(id: number | undefined) {
    if (id)
    this.idChannel = id;
    this.channelService.getChannelById(this.idChannel).subscribe((channel) => {
      //console.log(channel);
      this.formChannel = this.fb.group({
        channelName: [channel.channelName || ''],
      });
    });
  }

  cancel() {}

  delete(id: number) {
    this.channelService.deleteChannel(id).subscribe((channel) => {
      console.log(channel);
      this.channelService
        .getAllChannels()
        .subscribe((channel) => (this.channelList = channel));
    });
  }
}
