import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private sharedData: SharedDataService) {}

  toggleMusic() {
    this.sharedData.music = !this.sharedData.music;
    this.sharedData.musicSubject.next(this.sharedData.music);
  }
}
