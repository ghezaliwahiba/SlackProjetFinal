import { Component, OnInit } from '@angular/core';
import { Channel } from '../../models/channel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChannelServiceComponent } from '../../../service/channel.service/channel.service.component';
import { ChannelPartageService } from '../../../service/servicePartage/channel-partage.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.css',
})
export class ChannelComponent implements OnInit {
  formChannel!: FormGroup;
  listChannels: Channel[] = [];
  longeurChannels!: number;
  showForm: boolean = false;
  showInput: boolean = false;
  buttonsOpen: boolean[] = [];
  modalUpdateOpen = 'modal-hidden';
  idChannel!: number;

  openButtons(index: number) {
    this.buttonsOpen[index] = !this.buttonsOpen[index];
  }

  constructor(
    private channelService: ChannelServiceComponent,
    private channelPartageService: ChannelPartageService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.channelService.getAllChannels().subscribe((channels) => {
      this.listChannels = channels;
      this.listChannels.forEach(() => this.buttonsOpen.push(false));
    });
  }

  createChannel(channelName: string) {
    const newChannel: Channel = { id: this.longeurChannels + 1, channelName };
    this.channelService.addChannel(newChannel).subscribe((channel) => {
      console.log(channel);
      this.ngOnInit();
      //this.getAllChannels(); //on appelle getAllChannels() pour mettre à jour la liste des chaînes après l'ajout de la nouvelle chaîne.
      console.log(newChannel);
    });
  }

  deleteChannel(id: number) {
    this.channelService.deleteChannel(id).subscribe((v) => {
      this.channelService
        .getAllChannels()
        .subscribe((channels) => (this.listChannels = channels));
    });
  }

  getChannel(id: number) {
    this.channelService.getChannelById(id).subscribe((v) => {
      this.channelService
        .getAllChannels()
        .subscribe((channels) => (this.listChannels = channels));
    });
  }

  /*
  updateChannel(id: number, newName: string): void {
    const updatedChannel: Channel = { id, channelName: newName };
    this.channelService.updateChannel(updatedChannel).subscribe(() => {
      this.getAllChannels();
    });
  }
  */

  updateChannel(id: number | undefined) {
    if (id) {
      this.idChannel = id;
      this.channelService
        .getChannelById(this.idChannel)
        .subscribe((channel) => {
          this.formChannel = this.fb.group({
            channelName: [
              channel.channelName || '',
              [Validators.maxLength(200), Validators.maxLength(10)],
            ],
          });
        });
    }

    if (this.modalUpdateOpen == 'modal-hidden') {
      this.modalUpdateOpen = 'modal-open';
    } else {
      this.modalUpdateOpen = 'modal-hidden';
    }
  }

  save() {
    const newChannel: Channel = {
      ...this.formChannel.value,
      id: this.idChannel,
    };
    this.channelService.updateChannel(newChannel).subscribe();
    this.channelPartageService.updateChannel(newChannel);
    // Tenter de ra-fraichir la page
  }

  cancel() {}

  changeIdChannel(id: number){
    this.channelPartageService.changeIdChannel(id);
  }
}
