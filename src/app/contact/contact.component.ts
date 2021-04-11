import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  phonevalue = '015120746910';
  emailvalue = 'info@betterperforming.de';

  constructor(private snackBar: MatSnackBar) {}

  // Snackbar to show when copied to clipboard
  // tslint:disable-next-line:typedef
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  ngOnInit(): void {
  }
}
