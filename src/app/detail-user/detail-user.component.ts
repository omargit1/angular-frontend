import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  user: User | undefined;
  constructor(private route: ActivatedRoute,
    private service: UserService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.service.getUsers().subscribe(
      res => {
        this.user = res.find(u => u.id == id)
      }
    );

  }

}
