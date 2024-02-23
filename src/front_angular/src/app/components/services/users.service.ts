import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/users');
  }

}
