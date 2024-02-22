import { Component } from '@angular/core';
import { Channel } from '../../core/models/channel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChannelServiceComponent } from '../../service/channel.service/channel.service.component';

@Component({
  //  spécification du sélecteur (selector),
  selector: 'app-channel',
  // le chemin vers le fichier de modèle
  templateUrl: './channel.component.html',
  //le chemin vers le fichier de style
  styleUrl: './channel.component.css',
})
export class ChannelComponent {
  listChannels: Channel[] = [];
  longeurChannels!: number;

  constructor(private channelService: ChannelServiceComponent) {}

  ngOnInit(): void {
    this.getAllChannels();
  }

  getAllChannels(): void {
    this.channelService.getAllChannels().subscribe((channels) => {
      console.log(channels);
      this.listChannels = channels;
      console.log(channels);
    });
  }

  createChannel(channelName: string): void {
    const newChannel: Channel = { id: this.longeurChannels + 1, channelName };
    this.channelService.addChannel(newChannel).subscribe(() => {
      this.listChannels.push(newChannel);
      console.log(newChannel);
    });
  }

  deleteChannel(id: number): void {
    this.channelService.deleteChannel(id).subscribe(() => {
      this.getAllChannels();
    });
  }

  updateChannel(id: number, newName: string): void {
    const updatedChannel: Channel = { id, channelName: newName };
    this.channelService.updateChannel(updatedChannel).subscribe(() => {
      this.getAllChannels();
    });
  }
}
