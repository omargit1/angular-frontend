import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/api/users"
  private baseUrlRemote = "https://springboot-backend062022.herokuapp.com/api/users"

  users: Array<User> = [
    new User(1, "Omar", "NomO", "ee0@gmail.com"),
    new User(2, "Said", "NomS", "ee1@gmail.com"),
    new User(3, "Ali", "NomA", "ee2@gmail.com"),
    new User(4, "Youssef", "nomY", "ee3@gmail.com"),
    new User(5, "Brahim", "nomB", "ee4@gmail.com")
  ];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrlRemote
      }`)
  }

  /* getUsers(): Observable<User[]> {
    return of(this.users);
  } */
}
