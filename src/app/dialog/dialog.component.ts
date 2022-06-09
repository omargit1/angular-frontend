import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { inject } from '@angular/core/testing';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private api: UserService,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any) { }

  bookingTypes = ["Prepayment", "Guarantee", "PreAutorisation"]
  bookingForm: FormGroup
  actionBtn: string = "Save"

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateIn: ['', Validators.required],
      dateOut: ['', Validators.required],
      typeBooking: ['', Validators.required],
      email: ['', Validators.required],
      amount: ['', Validators.required]
    })
    console.log(this.editData)
    if (this.editData) {
      this.actionBtn = "Update"
      this.bookingForm.patchValue(this.editData)
    }
  }

  addBooking() {
    console.log(this.bookingForm.value)
    if (this.bookingForm.valid && !this.editData) {
      this.api.addBooking(this.bookingForm.value).subscribe({
        next: (res) => {
          alert("Product added successfully")
          this.bookingForm.reset();
          this.dialogRef.close("save");
        },
        error: () => {
          alert("Error while saving product")
        }
      })
    } else {
      this.updateBooking();
    }
  }

  updateBooking() {
    this.api.putBooking(this.bookingForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert("Booking updated successfully")
        this.bookingForm.reset()
        this.dialogRef.close('update')

      },
      error: () => {
        alert("error while updating a record")
      }
    }
    );
  }

}


