import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {

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
    'back.gif',
    'Baum40.gif',
    'blink.gif',
    'change.gif',
    'dance.gif',
    'dollar.gif',
    'fish_swim.gif',
    'newbluered.gif',
    'op24hrs2.gif',
    'pengu_walk.gif',
    'skull.gif',
    'starbright.gif',
    'twinkles.gif',
    'waste.gif',
    'wow.gif',
  ];
  backgrounds: string[] = [
    '5008.png',
    '5009.png',
    '5026.png',
    '168391b.jpg',
    'background.png',
    'bg-blue.jpg',
    'bg.jpg',
    'blue.png',
    'bluetexture.gif',
    'bubble.jpg',
    'fractal.png',
    'greengrid.jpg',
    'grid.gif',
    'stars.gif',
    'stars3.gif',
    'wave.jpg',
    'wave2.jpg',
  ];

  animes: string[] = [
    '5008.png',
    '5009.png',
    '5026.png',
    '168391b.jpg',
    'background.png',
    'bg-blue.jpg',
    'bg.jpg',
    'blue.png',
    'bluetexture.gif',
    'bubble.jpg',
    'fractal.png',
    'greengrid.jpg',
    'grid.gif',
    'stars.gif',
    'stars3.gif',
    'wave.jpg',
    'wave2.jpg',
  ];

  setBackground(index: number) {
    const imageUrl = `url(../../assets/backgrounds/${this.backgrounds[index]})`;
    document.body.style.backgroundImage = imageUrl;
  }

//neues zeug
  selectedIndex = 0;
  show = 0;

  onclick(index: number) {
    this.show = 1;
    this.selectedIndex = index; // aktualisiere die Eigenschaft mit dem Indexwert
    document.getElementById('overlay')!.style.display = 'block';

  }

  off() {
    this.show = 0;
    this.selectedIndex = 0; // setze den Index zurück
    document.getElementById('overlay')!.style.display = 'none';

  }
}
