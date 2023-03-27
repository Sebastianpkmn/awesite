import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-spam',
  templateUrl: './spam.component.html',
  styleUrls: ['./spam.component.css'],
})
export class SpamComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  shops: string[] = [
    'c1.jpg',
    'c2.jpeg',
    'c3.jpeg',
  ];

  selectedAnimeIndex = 0;
  show = 0;

  onclick(index: number) {
    delay(1000);
  }
}
