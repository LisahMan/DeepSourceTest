import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  a: number = 'abcde';
  b = 10 / 0;
  Pololo() {}

  constructor() {}

  ngOnInit(): void {
    a = 'xyz';
  }
}
