import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rock Paper Scissors Lizard Spock';
  desc = 'The Rock Paper Scissors Game plus Lizard Spock';
  weapons = [
    'rock',
    'paper',
    'scissors',
    'spock',
    'lizard'
  ];
  playerWeapon = 0;
  computerWeapon = 0;
  scores = [0 , 0];
  result = 4;
  resultStrings = [
    'TEI',
    'PLAYER WIN',
    'COMPUTER WIN',
    ''
  ];
  resultMessage = 'AWAITING GAME COMMENCEMENT';

  chooseWeapon( weapon: number): void {
    this.playerWeapon = weapon;
    console.log(this.playerWeapon);
    this.computerWeapon =  Math.floor(Math.random() * 3 );
    console.log(this.computerWeapon);
    this.calculateResult();
  }
  calculateResult(): void {
    if ( this.playerWeapon === this.computerWeapon) {
      this.result = 0;
    } else if (( (this.playerWeapon - this.computerWeapon + 5) % 5) === 1) {
      this.scores[0] += 1;
      this.result = 1;
    } else if (( (this.playerWeapon - this.computerWeapon + 5) % 5) === 3) {
      this.scores[0] += 1;
      this.result = 1;
    } else {
      this.scores[1] += 1;
      this.result = 2;
    }
    this.resultMessage = 'Computer chooses ' + this.weapons[this.computerWeapon] + ' ||| '  + this.resultStrings[this.result];
  }

}
