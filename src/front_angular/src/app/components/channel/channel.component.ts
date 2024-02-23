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

  //Cette méthode est appelée automatiquement lorsqu'un composant Angular est initialisé.
  ngOnInit(): void {
    //on appelle la méthode getAllChannels() pour récupérer toutes les chaînes.
    this.getAllChannels();
  }

  //cette methode permet de récuperer tout les chaines
  getAllChannels(): void {
    //on utilise channelService pour récupérer toutes les chaînes
    //la méthode subscribe() est utilisée pour s'abonner à un Observable.
    //L'Observable retourné par getAllChannels() émettra les chaînes récupérées lorsqu'elles seront disponibles.
    //Le callback passé à subscribe() est exécuté chaque fois qu'une nouvelle valeur est émise.
    this.channelService.getAllChannels().subscribe((channels) => {
      console.log(channels);
      //on les stockes dans la variable listChannels.
      this.listChannels = channels;
      console.log(channels);
    });
  }

  createChannel(channelName: string): void {
    const newChannel: Channel = { id: this.longeurChannels + 1, channelName };
    this.channelService.addChannel(newChannel).subscribe(() => {
      this.getAllChannels(); //on appelle getAllChannels() pour mettre à jour la liste des chaînes après l'ajout de la nouvelle chaîne.
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

  updateChannel(id: number, newName: string): void {
    const updatedChannel: Channel = { id, channelName: newName };
    this.channelService.updateChannel(updatedChannel).subscribe(() => {
      this.getAllChannels();
    });
  }

  /*
  updateChannel(channelName: string): void {
    const newChannel: Channel = { id: this.longeurChannels + 1, channelName };
    this.channelService.updateChannel(newChannel).subscribe(() => {
      this.getAllChannels();
      console.log(newChannel);
    });
  }
  */
}
