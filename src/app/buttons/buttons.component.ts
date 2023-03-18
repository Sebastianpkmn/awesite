import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  // images: string[] = [];

  // constructor() {
  //   const imagesContext = require.context(
  //     '../../assets/buttons',
  //     true,
  //     /\.(png|jpe?g|gif|svg)$/
  //   );
  //   imagesContext.keys().forEach((imagePath: string) => {
  //     this.images.push(imagesContext(imagePath));
  //   });
  // }

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
