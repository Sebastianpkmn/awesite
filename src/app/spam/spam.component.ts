import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spam',
  templateUrl: './spam.component.html',
  styleUrls: ['./spam.component.css'],
})
export class SpamComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let x = Math.floor(Math.random() * (2000 - 0 + 1) + 0);
  }
  x = Math.floor(Math.random() * (2000 - 0 + 1) + 0);

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
  animes: string[] = [
    'Akarin',
    'Elpeo Ple',
    'Astraea',
    'Hestia',
    'CC',
    'Gokou Ruri',
    'Holo',
    'Hozuki',
    'Isuzu Sento',
    'Kanade',
    'Kashiwazaki Sena', //Good
    'Kirisame Marisa',
    'Kuroyukihime',
    'Louise',
    'Rei',
    'Rikka',
    'Touwa Erio',
    'Urotsuki',
    'Yui Yuigahama',
  ];
}
