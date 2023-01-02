import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  a: boolean = false;
  b: bool = 'qbc';

  constructor() {}

  async test() {}
  ngOnInit(): void {
    this.a = 'xyz';
    this.test();
  }
}
