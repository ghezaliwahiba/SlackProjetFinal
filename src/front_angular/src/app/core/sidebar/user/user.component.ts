import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../../service/users.service/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  id!: number;
  // allStatus: StateUser[] = Object.values(StateUser);
  // selected: string = 'OPTION';
  deleteUserSuccess!: boolean;
  updateUserSuccess!: boolean;
  createUserSuccess!: boolean;
  listUsers: User[] = [];
  longueurUsers!: number;
  formUser!: FormGroup;

  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}
  //Cette méthode est appelée automatiquement lorsqu'un composant Angular est initialisé.
  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userService.getUserById(this.id).subscribe((user) => {
      // console.log(this.selected);

      this.formUser = this.fb.group({
        id: [user.id || ''],
        nom: [
          user.userName,
          // user.userName || '',
          // [Validators.required, Validators.maxLength(15)],
        ],
        // etat: [user.etat, [NotOptionValidator()]],
      });
    });
    //on appelle la méthode getAllUsers() pour récupérer toutes les chaînes.
    this.getAllUsers();
  }

  getAllUsers(): void {
    //on utilise userService pour récupérer toutes les chaînes
    //la méthode subscribe() est utilisée pour s'abonner à un Observable.
    //L'Observable retourné par getAllUsers() émettra les chaînes récupérées lorsqu'elles seront disponibles.
    //Le callback passé à subscribe() est exécuté chaque fois qu'une nouvelle valeur est émise.
    this.userService.getAllUsers().subscribe((users) => {
      console.log(users);
      //on les stockes dans la variable listChannels.
      this.listUsers = users;
      console.log(users);
    });
  }
  createUser(userName: string): void {
    const newUser: User = { id: this.longueurUsers + 1, userName };
    console.log(userName);
    this.userService.addUser(newUser).subscribe(() => {
      this.getAllUsers(); //on appelle getAllUsers() pour mettre à jour la liste des chaînes après l'ajout du nouvel utilisateur.
      this.createUserSuccess = true;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((v) => {
      this.userService
        .getAllUsers()
        .subscribe((users) => (this.listUsers = users));
      this.deleteUserSuccess = true;
    });
  }

  updateUser(id: number, newName: string): void {
    const updatedUser: User = { id, userName: newName };
    console.log('this.id, this.updateUse');

    this.userService.updateUser(updatedUser).subscribe(() => {
      this.getAllUsers();
      this.updateUserSuccess = true;
      console.log(this.id, this.updateUser);
    });
  }
}
