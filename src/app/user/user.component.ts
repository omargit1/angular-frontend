import { Component, OnInit, ViewChild } from '@angular/core';
import { Booking } from '../booking';
import { UserService } from '../user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'amount', 'dateIn', 'dateOut', 'typeBooking', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public users: Booking[]
  downloadStatus: number = 0
  constructor(
    private userService: UserService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchBookings()
  }

  fetchBookings() {
    this.userService.getBookings().subscribe((data: Booking[]) => {
      this.users = data
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
  }

  getStyle() {
    return {
      'font-size': 25,
      'font-style': 'italic',
      'color': 'blue'
    }
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editBooking(row: any) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      console.log(val)
      this.fetchBookings();
    })
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      console.log(val)
      this.fetchBookings();
    });
  }

  deleteBooking(id: number) {
    this.userService.deleteBooking(id).subscribe({
      next: (res) => {
        alert("Item deleted successfully")
        this.fetchBookings();
      },
      error: () => {
        alert("error while deleting item")
      }
    })

  }


}
