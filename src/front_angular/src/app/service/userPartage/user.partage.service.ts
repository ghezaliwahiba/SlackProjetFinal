import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPartageService {
  private idUserSource = new BehaviorSubject<number>(1);//instanciation et première valeur
  currentIdUser = this.idUserSource.asObservable();

  constructor() { }

  changeIdUser(idUser: number){
    this.idUserSource.next(idUser);
  }
}
