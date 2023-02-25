import { Component, OnInit } from '@angular/core';

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
    'var(--pink)',
    'var(--violet)',
    'var(--blue)',
    'var(--green)',
    'var(--yellow)',
    'var(--orange)',
    'var(--red)',
    'var(--cyan)',
    'var(--brown)',
    'var(--lgreen)',
    'var(--lblue)',
  ];

  colorNr: number = Math.round(Math.random() * 10);


  
}



