import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  music = false;
  musicSubject = new BehaviorSubject<boolean>(this.music);
}
