import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  buttons: string[] = ["wow.gif","made_with_windows.gif","twinkles.gif","starbright.gif","sign_guest_book.gif","newbluered.gif","h-free-anim.gif","dollar.gif","bluetexture.gif","back.gif","263gggk.gif"]

}
