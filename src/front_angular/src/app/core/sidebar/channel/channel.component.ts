import { Component, OnInit } from '@angular/core';
import { Channel } from '../../models/channel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChannelServiceComponent } from '../../../service/channel.service/channel.service.component';

@Component({
  //  spécification du sélecteur (selector),
  selector: 'app-channel',
  // le chemin vers le fichier de modèle
  templateUrl: './channel.component.html',
  //le chemin vers le fichier de style
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

  //Elle inverse la valeur de cette propriété. Si showInput est true, elle le définira sur false, et vice versa.
  openButtons(index: number) {
    this.buttonsOpen[index] = !this.buttonsOpen[index];
  }

  constructor(
    private channelService: ChannelServiceComponent,
    private fb: FormBuilder
  ) {}
  //Cette méthode est appelée automatiquement lorsqu'un composant Angular est initialisé.
  ngOnInit() {
    //on appelle la méthode getAllChannels() pour récupérer toutes les chaînes.
    this.getAllChannels();
  }

  //cette methode permet de récuperer tout les chaines
  getAllChannels() {
    //on utilise channelService pour récupérer toutes les chaînes
    //la méthode subscribe() est utilisée pour s'abonner à un Observable.
    //L'Observable retourné par getAllChannels() émettra les chaînes récupérées lorsqu'elles seront disponibles.
    //Le callback passé à subscribe() est exécuté chaque fois qu'une nouvelle valeur est émise.
    this.channelService.getAllChannels().subscribe((channels) => {
      console.log(channels);
      //on les stockes dans la variable listChannels.
      this.listChannels = channels;
      this.listChannels.forEach(() => this.buttonsOpen.push(false));
      console.log(channels);
    });
  }

  createChannel(channelName: string) {
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
            ChannelName: [channel.channelName || ''],
          });
        });
    }

    if (this.modalUpdateOpen == 'modal-hidden') {
      this.modalUpdateOpen = 'modal-open';
    } else {
      this.modalUpdateOpen = 'modal-hidden';
    }
  }
  cancel() {}
}
