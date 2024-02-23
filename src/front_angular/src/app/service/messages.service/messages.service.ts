import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../../core/models/message';

@Injectable({
  providedIn: 'root',
})

export class MessagesService {
  apiUrl: String = 'http://localhost:8080/messages';
  apiUrl: String = 'http://localhost:8080/messages';

  constructor(private http: HttpClient) {}

  getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}`);
  }

  addMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(`${this.apiUrl}`, message);
  }

  deleteMessage(id: number): Observable<Message> {
    return this.http.delete<Message>(`${this.apiUrl}/${id}`);
  }

  getMessagesById(id: number): Observable<Message> {
    return this.http.get<Message>(`${this.apiUrl}/${id}`);
  }

  updateMessage(message: Message): Observable<Message> {
    return this.http.put<Message>(`${this.apiUrl}/${message.id}`, message);
  }
}
