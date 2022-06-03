import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: User[]
  downloadStatus: number = 0
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data
    })
  }

  getStyle() {
    return {
      'font-size': 25,
      'font-style': 'italic',
      'color': 'blue'
    }
  }

  downloadFile() {
    this.downloadStatus = 1
    setTimeout(() => {
      this.downloadStatus = 2
    }, 2000)
  }

}
