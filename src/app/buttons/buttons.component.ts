import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  buttons: string[] = [
    'about.png',
    'gif.png',
    'made_with_windows.gif',
    'sign_guest_book.gif',
    'h-free-anim.gif',
    '263gggk.gif',
    'drmario.gif',
    'high.gif',
    'mymusic.gif',
  ];
  gifs: string[] = [
    'wow.gif',
    'twinkles.gif',
    'starbright.gif',
    'newbluered.gif',
    'dollar.gif',
    'back.gif',
    'change.gif',
    'blink.gif',
    'op24hrs2.gif',
    'skull.gif',
    'waste.gif',
  ];
}
