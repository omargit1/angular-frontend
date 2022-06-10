import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private baseUrl = "http://localhost:8080/api/bookings"
  private baseUrl = "https://springboot-backend062022.herokuapp.com/api/bookings"

  users: Array<Booking> = [
    new Booking(1, "Omar", "NomO", "ee0@gmail.com"),
    new Booking(2, "Said", "NomS", "ee1@gmail.com"),
    new Booking(3, "Ali", "NomA", "ee2@gmail.com"),
    new Booking(4, "Youssef", "nomY", "ee3@gmail.com"),
    new Booking(5, "Brahim", "nomB", "ee4@gmail.com")
  ];

  constructor(private http: HttpClient) { }

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.baseUrl + ""
      }`)
  }

  /* getUsers(): Observable<User[]> {
    return of(this.users);
  } */

  addBooking(data: any) {
    return this.http.post<any>(`${this.baseUrl + "/add"
      }`, data)
  }

  putBooking(data: any, id: number) {
    return this.http.put<any>(`${this.baseUrl + "/" + id
      }`, data)
  }

  deleteBooking(id: number) {
    return this.http.delete<any>(`${this.baseUrl + "/" + id}`)
  }
}
