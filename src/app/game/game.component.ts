

import { Component } from '@angular/core';
import { faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { faHandLizard } from '@fortawesome/free-solid-svg-icons';
import { faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { faHandRock } from '@fortawesome/free-solid-svg-icons';
import { faHandSpock } from '@fortawesome/free-solid-svg-icons';
import { EWeapons} from '../enums/weapons.enum';
import { EResultStrings} from '../enums/result-strings.enum';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  title = 'Rock Paper Scissors Lizard Spock';
  desc = 'The Rock Paper Scissors Game plus Lizard Spock';
  faHandScissors = faHandScissors;
  faHandLizard = faHandLizard;
  faHandPaper = faHandPaper;
  faHandRock = faHandRock;
  faHandSpock = faHandSpock;
  weapons = EWeapons;
  playerWeapon = 0;
  computerWeapon = 0;
  scores = [0 , 0];
  result = 4;
  resultStrings = EResultStrings;
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
    this.resultMessage = 'Computer chooses ' + this.weapons[this.computerWeapon] + ' - '  + this.resultStrings[this.result];
  }

}
