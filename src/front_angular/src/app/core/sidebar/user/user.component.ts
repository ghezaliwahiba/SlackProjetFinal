import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../../service/users.service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  listUsers: User[] = [];
  longueurUsers!: number;

  constructor(private userService: UsersService) {}
  //Cette méthode est appelée automatiquement lorsqu'un composant Angular est initialisé.
  ngOnInit(): void {
    //on appelle la méthode getAllChannels() pour récupérer toutes les chaînes.
    this.getAllUsers();
  }

  getAllUsers(): void {
    //on utilise channelService pour récupérer toutes les chaînes
    //la méthode subscribe() est utilisée pour s'abonner à un Observable.
    //L'Observable retourné par getAllChannels() émettra les chaînes récupérées lorsqu'elles seront disponibles.
    //Le callback passé à subscribe() est exécuté chaque fois qu'une nouvelle valeur est émise.
    this.userService.getAllUsers().subscribe((users) => {
      console.log(users);
      //on les stockes dans la variable listChannels.
      this.listUsers = users;
      console.log(users);
    });
  }
}