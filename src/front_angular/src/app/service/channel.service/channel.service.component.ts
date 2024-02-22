import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Channel } from '../../core/models/channel';

@Injectable({
  providedIn: 'root',
})
export class ChannelServiceComponent {
  apiUrl: string = 'http://localhost:8080/channels';
  constructor(private http: HttpClient) {}
  getAllChannels(): Observable<Channel[]> {
    return this.http.get<Channel[]>(`${this.apiUrl}`);
  }

  addChannel(channel: Channel): Observable<Channel> {
    return this.http.post<Channel>(`${this.apiUrl}`, channel);
  }
  deleteChannel(id: number): Observable<Channel> {
    return this.http.delete<Channel>(`${this.apiUrl}/${id}`);
  }

  getChannelById(id: number): Observable<Channel> {
    return this.http.get<Channel>(`${this.apiUrl}/${id}`);
  }

  updateChannel(channel: Channel): Observable<Channel> {
    return this.http.post<Channel>(`${this.apiUrl}/${channel.id}`, channel);
  }
}
