import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
})
export class AnimeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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

  colors: string[] = [
    '#880000',
    '#ff7777',
    '#cc44cc',
    '#0000aa',
    '#ee5577',
    '#dd7766',
    '#dd8855',
  ];

  selectedAnimeIndex = 0;
  show = 0;

  onclick(index: number) {
    delay(1000);
    
    this.show = 1;
    this.selectedAnimeIndex = index; // aktualisiere die Eigenschaft mit dem Indexwert
    document.getElementById('overlay')!.style.display = 'block';
  }

  off() {
    this.show = 0;
    this.selectedAnimeIndex = 0; // setze den Index zurück
    document.getElementById('overlay')!.style.display = 'none';
  }
}
