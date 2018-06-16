import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  start = false;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => this.start = true, 1000);
  }
}
