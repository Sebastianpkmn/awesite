import { Component } from '@angular/core';
import { MusicComponent } from './music/music.component';
import { SharedDataService } from './shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'awsite';

  musicEnabled = false;

  constructor(private sharedData: SharedDataService) {}

  ngOnInit() {
    this.sharedData.musicSubject.subscribe(
      (music) => (this.musicEnabled = music)
    );
  }
  music: boolean = true;
}
