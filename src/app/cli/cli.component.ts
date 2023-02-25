import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.css']
})
export class CLIComponent  {
  command: string = '';
  messages: string[] = [];

  executeCommand() {
    let command = this.command.trim();
    this.command = '';

    if (command === '') {
      return;
    }

    if (command === 'show pictures') {
      // Code zum Anzeigen von Bildern
      this.messages.push('Bilder anzeigen');
    } else if (command === 'show videos') {
      // Code zum Anzeigen von Videos
      this.messages.push('Videos anzeigen');
    } else if (command === 'exit') {
      // Beenden des Programms
      this.messages.push('Programm wird beendet...');
    } else {
      this.messages.push('Ungültige Eingabe. Versuche es erneut.');
    }
  }
}

