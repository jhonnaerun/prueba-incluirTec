import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public getAll() {
     return this.http.get(`${this.url}/users`);
  }
}
