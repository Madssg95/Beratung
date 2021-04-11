import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  phonevalue = '015120746910';
  emailvalue = 'info@beratungxy.de';

  constructor() { }

  ngOnInit(): void {
  }
}
