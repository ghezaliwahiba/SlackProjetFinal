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
  buttonsOpen = 'btns-hidden'; // recherche CSS

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
        console.log(channels);
        this.channelList = channels;
      },
    });
  }

  ngUpdate() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.channelService.getChannelById(this.id).subscribe((channel) => {
      console.log(channel);

      this.formChannel = this.fb.group({
        content: [channel.channelName || ''],
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

  cancel() {}

  update() {
    
  }

  modalUpdate() {}

  modalDelete() {}

  delete(id: number) {
    this.channelService.deleteChannel(id).subscribe((channel) => {
      console.log(channel);
      this.channelService
        .getAllChannels()
        .subscribe((channel) => (this.channelList = channel));
    });
  }
}
